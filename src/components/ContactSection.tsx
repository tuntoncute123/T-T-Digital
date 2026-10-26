'use client';

import React, { useState } from 'react';
import { Form, Input, Select, Button, message, Modal } from 'antd';
import confetti from 'canvas-confetti';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Headphones,
  MessageCircle,
  ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';
import { HandDrawnMarker, AnimatedMarkerText } from './HandDrawnMarker';

export const ContactSection: React.FC = () => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successModalData, setSuccessModalData] = useState<any>(null);

  const handleSubmit = async (values: any) => {
    setIsSubmitting(true);

    // 1. Prepare and copy full project context for Zalo
    const zaloMsg = `Chào T&T Digital, tôi là ${values.fullName} (SĐT: ${values.phone}).\nTôi cần tư vấn: ${values.service || 'Giải pháp phần mềm'}.\nNgân sách: ${values.budget || 'Thỏa thuận'}.${values.company ? `\nCông ty: ${values.company}` : ''}${values.message ? `\nMô tả: ${values.message}` : ''}\nNhờ chuyên gia hỗ trợ tư vấn giúp tôi nhé!`;
    try {
      navigator.clipboard.writeText(zaloMsg);
    } catch (e) {
      // ignore
    }

    // 2. Directly open Zalo chat with phone 0849632852
    if (typeof window !== 'undefined') {
      window.open('https://zalo.me/0849632852', '_blank');
    }

    // 3. Update UI state and celebrate
    setSuccessModalData(values);
    form.resetFields();
    setIsSubmitting(false);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });

    message.success('Đã mở Zalo 0849.632.852! Nội dung dự án đã được sao chép sẵn, bạn chỉ cần Dán (Ctrl+V) vào ô chat.');

    // 4. Background quiet sync to API
    try {
      fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          serviceType: values.service,
          source: 'Form Liên Hệ Chân Trang',
        }),
      }).catch(() => {});
    } catch (err) {
      // non-blocking
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#fffbf8] scroll-mt-20 border-t border-orange-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <Headphones className="w-3.5 h-3.5" />
            <span>KẾT NỐI VỚI CHUYÊN GIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-snug">
            Sẵn Sàng Bứt Phá Cùng{' '}
            <HandDrawnMarker color="text-[#ea580c]" variant="wobbly2" delay={0.2}>
              T&amp;T Digital?
            </HandDrawnMarker>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Hãy để lại thông tin hoặc liên hệ trực tiếp với chúng tôi để nhận{' '}
            <AnimatedMarkerText markerColor="bg-orange-200/90" delay={0.35}>
              buổi tư vấn chiến lược 1-1 miễn phí
            </AnimatedMarkerText>{' '}
            từ các kỹ sư phần mềm cấp cao.
          </p>
        </div>

        {/* 2 Columns: Office info & Consultation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Corporate Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            
            {/* Headquarters Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white text-slate-800 shadow-xl shadow-orange-500/10 space-y-5 border border-orange-200/90">
              <div className="flex items-center justify-between pb-3.5 border-b border-orange-100">
                <img
                  src="/logo.png"
                  alt="T&T Digital Logo"
                  className="h-10 w-auto object-contain bg-orange-50/60 p-1 rounded-lg border border-orange-100"
                />
                <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                  Trụ sở chính
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address}</span>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                  <span>
                    Hotline: <a href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`} className="font-bold text-slate-900 hover:text-orange-600 hover:underline">{COMPANY_INFO.hotline}</a>
                  </span>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </div>

                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </div>

              {/* Regional branches */}
              <div className="pt-4 border-t border-orange-100 space-y-2">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 block">
                  Văn phòng đại diện:
                </span>
                {COMPANY_INFO.branches.map((branch, bIdx) => (
                  <p key={bIdx} className="text-sm text-slate-600 leading-relaxed">
                    • {branch}
                  </p>
                ))}
              </div>
            </div>

            {/* Support SLA card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-orange-50/90 border border-orange-200/80 flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-orange-950">Cam Kết Thời Gian Phản Hồi Dưới 15 Phút</h4>
                <p className="text-xs sm:text-sm text-orange-800">Đội ngũ kỹ thuật túc trực 24/7 kể cả ngày nghỉ và lễ Tết.</p>
              </div>
            </div>
          </div>

          {/* Right Column: In-page Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-orange-100 shadow-sm" data-aos="fade-left">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5">
                Gửi Yêu Cầu Tư Vấn &amp; Nhận Dự Toán Chi Tiết
              </h3>
              <p className="text-sm text-slate-500">
                Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại kèm bản đề xuất giải pháp sơ bộ.
              </p>
            </div>

            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              initialValues={{
                service: 'Thiết Kế Landing Page (Chỉ từ 1.500.000 đ)',
                budget: 'Dưới 3.000.000 đ (Gói Landing Page)'
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <Form.Item
                  name="fullName"
                  label={<span className="text-sm font-semibold text-slate-800">Họ và tên</span>}
                  rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
                >
                  <Input placeholder="Nguyễn Văn A" size="large" />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label={<span className="text-sm font-semibold text-slate-800">Số điện thoại</span>}
                  rules={[
                    { required: true, message: 'Vui lòng nhập số điện thoại' },
                    { pattern: /^[0-9+ ]{9,13}$/, message: 'Số điện thoại không hợp lệ' }
                  ]}
                >
                  <Input placeholder="0849 632 852" size="large" />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <Form.Item
                  name="email"
                  label={<span className="text-sm font-semibold text-slate-800">Email</span>}
                  rules={[
                    { required: true, message: 'Vui lòng nhập email' },
                    { type: 'email', message: 'Email không đúng định dạng' }
                  ]}
                >
                  <Input placeholder="name@company.com" size="large" />
                </Form.Item>

                <Form.Item
                  name="company"
                  label={<span className="text-sm font-semibold text-slate-800">Tên công ty</span>}
                >
                  <Input placeholder="Công ty TNHH ..." size="large" />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <Form.Item
                  name="service"
                  label={<span className="text-sm font-semibold text-slate-800">Dịch vụ quan tâm</span>}
                >
                  <Select size="large">
                    <Select.Option value="Thiết Kế Landing Page (Chỉ từ 1.500.000 đ)">Thiết Kế Landing Page (Chỉ từ 1.500.000 đ)</Select.Option>
                    <Select.Option value="Website Doanh Nghiệp Chuẩn SEO">Website Doanh Nghiệp Chuẩn SEO (Từ 3.500.000 đ)</Select.Option>
                    <Select.Option value="Website Bán Hàng & Thương Mại Điện Tử (Kèm Hosting)">Website Bán Hàng &amp; TMĐT Kèm Hosting (Từ 7.000.000 đ)</Select.Option>
                    <Select.Option value="Phần Mềm Quản Trị Chuyên Sâu (ERP/CRM)">Phần Mềm Quản Trị Chuyên Sâu (ERP/CRM)</Select.Option>
                    <Select.Option value="Lập Trình Ứng Dụng Di Động (iOS/Android)">Lập Trình Ứng Dụng Di Động (iOS/Android)</Select.Option>
                    <Select.Option value="Tích Hợp API & Chuyển Đổi Số">Tích Hợp API &amp; Chuyển Đổi Số</Select.Option>
                    <Select.Option value="Nâng Cấp & Tối Ưu Tốc Độ Web">Nâng Cấp &amp; Tối Ưu Tốc Độ Web</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="budget"
                  label={<span className="text-sm font-semibold text-slate-800">Ngân sách dự kiến</span>}
                >
                  <Select size="large">
                    <Select.Option value="Dưới 3.000.000 đ (Gói Landing Page)">Dưới 3.000.000 đ (Gói Landing Page)</Select.Option>
                    <Select.Option value="Từ 3.000.000 đ - 7.000.000 đ (Website Doanh nghiệp)">Từ 3.000.000 đ - 7.000.000 đ (Website Doanh nghiệp)</Select.Option>
                    <Select.Option value="Từ 7.000.000 đ - 15.000.000 đ (Website TMĐT có Hosting)">Từ 7.000.000 đ - 15.000.000 đ (Website TMĐT có Hosting)</Select.Option>
                    <Select.Option value="Từ 15.000.000 đ - 30.000.000 đ (Phần mềm & Web App)">Từ 15.000.000 đ - 30.000.000 đ (Phần mềm &amp; Web App)</Select.Option>
                    <Select.Option value="Trên 30.000.000 đ (Hệ thống lớn / Mobile App)">Trên 30.000.000 đ (Hệ thống lớn / Mobile App)</Select.Option>
                  </Select>
                </Form.Item>
              </div>

              <Form.Item
                name="message"
                label={<span className="text-sm font-semibold text-slate-800">Mô tả bài toán của bạn</span>}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="Chia sẻ cho chúng tôi biết về mục tiêu hoặc vướng mắc bạn muốn giải quyết..."
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                loading={isSubmitting}
                className="rounded-xl font-bold bg-orange-600 hover:bg-orange-700 text-white h-12 shadow-md shadow-orange-500/25 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Gửi Thông Tin Nhận Tư Vấn</span>
              </Button>
            </Form>
          </div>
        </div>
      </div>

      {/* Success & Zalo Transfer Modal */}
      <Modal
        open={!!successModalData}
        onCancel={() => setSuccessModalData(null)}
        footer={null}
        destroyOnHidden
        centered
        width={520}
        className="rounded-3xl overflow-hidden"
      >
        {successModalData && (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce-slight">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Gửi Thông Tin Thành Công!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Dữ liệu của bạn đã được chuyển tới chuyên gia T&amp;T Digital. Bạn có thể mở Zalo kết nối trực tiếp với chuyên gia ngay lập tức:
            </p>

            <div className="bg-orange-50/80 border border-orange-200/80 rounded-2xl p-3.5 text-left text-xs text-slate-700 space-y-1 shadow-xs">
              <p className="font-semibold text-slate-900">
                Khách hàng: <span className="text-orange-700">{successModalData.fullName}</span> ({successModalData.phone})
              </p>
              <p>Dịch vụ: <span className="font-medium text-slate-900">{successModalData.service}</span></p>
              {successModalData.budget && <p>Ngân sách: <span className="font-medium text-slate-900">{successModalData.budget}</span></p>}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://zalo.me/0849632852"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  const msg = `Chào T&T Digital, tôi là ${successModalData.fullName} (SĐT: ${successModalData.phone}).\nTôi cần tư vấn: ${successModalData.service || 'Giải pháp phần mềm'}.\nNgân sách: ${successModalData.budget || 'Thỏa thuận'}.${successModalData.company ? `\nCông ty: ${successModalData.company}` : ''}${successModalData.message ? `\nMô tả: ${successModalData.message}` : ''}\nNhờ chuyên gia hỗ trợ tư vấn giúp tôi nhé!`;
                  try {
                    navigator.clipboard.writeText(msg);
                    message.success('Đã sao chép nội dung! Bạn chỉ cần dán (Ctrl+V) vào Zalo.');
                  } catch (e) {}
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl font-bold bg-[#0068ff] hover:bg-[#0055d4] text-white shadow-md shadow-blue-500/25 text-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Mở Chat Zalo (0849.632.852)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <Button
                onClick={() => setSuccessModalData(null)}
                className="w-full sm:w-auto rounded-xl font-semibold border-slate-200 text-slate-700 h-10 px-5"
              >
                Đóng Cửa Sổ
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
