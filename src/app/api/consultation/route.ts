import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
      company,
      serviceType,
      budget,
      notes,
      source = 'Website T&T Digital',
    } = body;

    // Validate required fields
    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, error: 'Vui lòng cung cấp họ tên và số điện thoại' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      hour12: false,
    });

    const leadData = {
      timestamp,
      fullName,
      phone,
      email: email || 'Không cung cấp',
      company: company || 'Cá nhân',
      serviceType: serviceType || 'Chưa chọn',
      budget: budget || 'Chưa xác định',
      notes: notes || 'Không có ghi chú thêm',
      source,
    };

    console.log('[T&T Digital - Lead mới]:', leadData);

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (webhookUrl && webhookUrl.trim() !== '') {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
          redirect: 'follow',
        });

        if (!response.ok) {
          console.warn('[Google Sheets Webhook] Phản hồi không thành công:', response.status);
        }
      } catch (webhookError) {
        console.error('[Google Sheets Webhook Error]:', webhookError);
        // We still return success to the client so customer flow is smooth
      }
    } else {
      console.info(
        '[Google Sheets Webhook] GOOGLE_SHEET_WEBHOOK_URL chưa được cấu hình trong .env.local. Dữ liệu đã được lưu tạm vào console.'
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Gửi yêu cầu thành công! T&T Digital sẽ liên hệ bạn trong 15 phút.',
      data: leadData,
    });
  } catch (error) {
    console.error('[API Consultation Error]:', error);
    return NextResponse.json(
      { success: false, error: 'Đã xảy ra lỗi máy chủ. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
