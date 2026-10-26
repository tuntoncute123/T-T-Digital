'use client';

import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, Button, message, Alert } from 'antd';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Send, 
  Phone, 
  Mail, 
  Building, 
  User, 
  FileText,
  MessageCircle,
  Copy,
  ExternalLink
} from 'lucide-react';

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
  initialService?: string;
  initialProjectDetails?: {
    projectType: string;
    selectedAddons: string[];
    estimatedPrice: string;
    estimatedTime: string;
  } | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  open,
  onClose,
  initialService,
  initialProjectDetails
}) => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const formatZaloMessage = (data: any) => {
    return `Chào T&T Digital, tôi là ${data.fullName} (SĐT: ${data.phone}).\nTôi cần tư vấn dịch vụ: ${data.serviceType}.\nNgân sách dự kiến: ${data.budget || 'Thỏa thuận'}.${data.company ? `\nCông ty: ${data.company}` : ''}${data.notes ? `\nGhi chú: ${data.notes}` : ''}\nNhờ chuyên gia hỗ trợ tư vấn giúp tôi nhé!`;
  };

  const handleCopyZaloMessage = () => {
    if (submittedData) {
      const msg = formatZaloMessage(submittedData);
      try {
        navigator.clipboard.writeText(msg);
        message.success('Đã sao chép nội dung dự án! Bạn chỉ cần dán (Ctrl+V) vào Zalo.');
      } catch (e) {
        // clipboard fallback
      }
    }
  };

  useEffect(() => {
    if (open) {
      setIsSubmitted(false);
      setSubmittedData(null);
      if (initialProjectDetails) {
        form.setFieldsValue({
          serviceType: initialProjectDetails.projectType,
          budget: initialProjectDetails.estimatedPrice,
          notes: `[Dự toán chi phí sơ bộ]: ${initialProjectDetails.estimatedPrice}\n- Tính năng chọn: ${initialProjectDetails.selectedAddons.join(', ')}\n- Thời gian dự kiến: ${initialProjectDetails.estimatedTime}`
        });
      } else if (initialService) {
        form.setFieldsValue({
          serviceType: initialService
        });
      }
    }
  }, [open, initialService, initialProjectDetails, form]);

  const handleFinish = async (values: any) => {
    setIsSubmitting(true);

    // 1. Prepare and copy full project context for Zalo
    const msg = formatZaloMessage(values);
    try {
      navigator.clipboard.writeText(msg);
    } catch (e) {
      // ignore
    }

    // 2. Directly open Zalo chat with phone 0849632852
    if (typeof window !== 'undefined') {
      window.open('https://zalo.me/0849632852', '_blank');
    }

    // 3. Update UI state to success
    setSubmittedData(values);
    setIsSubmitted(true);
    setIsSubmitting(false);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    message.success('Đã mở Zalo 0849.632.852! Nội dung dự án đã được sao chép sẵn, bạn chỉ cần Dán (Ctrl+V) vào ô chat.');

    // 4. Background quiet sync to API
    try {
      fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          source: initialProjectDetails ? 'Bảng Tính Dự Toán Chi Phí' : 'Popup Đăng Ký Tư Vấn',
        }),
      }).catch(() => {});
    } catch (err) {
      // non-blocking
    }
  };

  return (
    <Modal
      title={
        <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
          <img
            src="/logo.png"
            alt="T&T Digital Logo"
            className="h-8 w-auto object-contain"
          />
          <div>
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              Đăng Ký Tư Vấn &amp; Nhận Báo Giá Dự Án
            </h3>
            <p className="text-xs text-slate-500 font-normal">
              Đội ngũ chuyên gia kỹ thuật sẽ phân tích và phản hồi trong 15 phút
            </p>
          </div>
        </div>
      }
      open={open}
      onCancel={onClose}
      footer={null}
      destroyOnHidden
      centered
      width={560}
      className="rounded-3xl overflow-hidden"
    >
      {isSubmitted ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce-slight">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Yêu Cầu Đã Được Tiếp Nhận!
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Dữ liệu dự án đã được ghi nhận. Bạn có thể mở Zalo kết nối trực tiếp với chuyên gia ngay lập tức:
          </p>

          {/* Context box preview */}
          {submittedData && (
            <div className="bg-orange-50/80 border border-orange-200/80 rounded-2xl p-4 text-left text-xs text-slate-700 space-y-1.5 shadow-xs">
              <div className="font-bold text-orange-900 flex items-center justify-between pb-1.5 border-b border-orange-200/60">
                <span className="flex items-center space-x-1.5">
                  <FileText className="w-3.5 h-3.5 text-orange-600" />
                  <span>Nội dung dự án đã soạn sẵn cho Zalo:</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopyZaloMessage}
                  className="text-orange-700 hover:text-orange-900 font-bold inline-flex items-center space-x-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Sao chép</span>
                </button>
              </div>
              <p className="font-semibold text-slate-900">
                Khách hàng: <span className="text-orange-700">{submittedData.fullName}</span> ({submittedData.phone})
              </p>
              <p>
                Dịch vụ: <span className="font-medium text-slate-900">{submittedData.serviceType}</span>
              </p>
              {submittedData.budget && (
                <p>
                  Ngân sách: <span className="font-medium text-slate-900">{submittedData.budget}</span>
                </p>
              )}
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://zalo.me/0849632852"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCopyZaloMessage}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl font-bold bg-[#0068ff] hover:bg-[#0055d4] text-white shadow-md shadow-blue-500/25 text-sm transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Mở Chat Zalo (0849.632.852)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <Button
              onClick={onClose}
              className="w-full sm:w-auto rounded-xl font-semibold border-slate-200 text-slate-700 h-10 px-5"
            >
              Đóng Cửa Sổ
            </Button>
          </div>
        </div>
      ) : (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          className="pt-3 space-y-1"
          initialValues={{
            serviceType: 'Thiết Kế Landing Page (Từ 1.500.000 đ)',
            budget: 'Dưới 3.000.000 đ (Gói Landing Page)'
          }}
        >
          {initialProjectDetails && (
            <Alert
              type="info"
              showIcon
              className="mb-4 rounded-xl text-xs"
              message={`Đang đính kèm dự toán cho: ${initialProjectDetails.projectType}`}
              description={`Ước tính ngân sách: ${initialProjectDetails.estimatedPrice} | Tiến độ: ${initialProjectDetails.estimatedTime}`}
            />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <Form.Item
              name="fullName"
              label={<span className="text-sm font-semibold text-slate-800">Họ và tên của bạn</span>}
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
            >
              <Input placeholder="Nguyễn Văn A" size="large" prefix={<User className="w-4 h-4 text-slate-400 mr-1" />} />
            </Form.Item>

            <Form.Item
              name="phone"
              label={<span className="text-sm font-semibold text-slate-800">Số điện thoại liên hệ</span>}
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại' },
                { pattern: /^[0-9+ ]{9,13}$/, message: 'Số điện thoại không hợp lệ' }
              ]}
            >
              <Input placeholder="0849 632 852" size="large" prefix={<Phone className="w-4 h-4 text-slate-400 mr-1" />} />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <Form.Item
              name="email"
              label={<span className="text-sm font-semibold text-slate-800">Email doanh nghiệp</span>}
              rules={[
                { required: true, message: 'Vui lòng nhập email' },
                { type: 'email', message: 'Email không đúng định dạng' }
              ]}
            >
              <Input placeholder="name@company.com" size="large" prefix={<Mail className="w-4 h-4 text-slate-400 mr-1" />} />
            </Form.Item>

            <Form.Item
              name="company"
              label={<span className="text-sm font-semibold text-slate-800">Tên công ty / Doanh nghiệp</span>}
            >
              <Input placeholder="Công ty TNHH ..." size="large" prefix={<Building className="w-4 h-4 text-slate-400 mr-1" />} />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <Form.Item
              name="serviceType"
              label={<span className="text-sm font-semibold text-slate-800">Dịch vụ quan tâm</span>}
              rules={[{ required: true, message: 'Vui lòng chọn dịch vụ' }]}
            >
              <Select size="large">
                <Select.Option value="Thiết Kế Landing Page (Từ 1.500.000 đ)">Thiết Kế Landing Page (Từ 1.500.000 đ)</Select.Option>
                <Select.Option value="Website Doanh Nghiệp Chuẩn SEO (Từ 3.500.000 đ)">Website Doanh Nghiệp Chuẩn SEO (Từ 3.500.000 đ)</Select.Option>
                <Select.Option value="Website Bán Hàng & Thương Mại Điện Tử (Kèm Hosting 7.000.000 đ)">Website Bán Hàng &amp; TMĐT Kèm Hosting (Từ 7.000.000 đ)</Select.Option>
                <Select.Option value="Phát Triển Phần Mềm Chuyên Sâu (ERP/CRM)">Phát Triển Phần Mềm Chuyên Sâu (ERP/CRM)</Select.Option>
                <Select.Option value="Lập Trình Ứng Dụng Di Động (iOS & Android)">Lập Trình Ứng Dụng Di Động (iOS &amp; Android)</Select.Option>
                <Select.Option value="Chuyển Đổi Số & Tích Hợp Hệ Thống API">Chuyển Đổi Số &amp; Tích Hợp Hệ Thống API</Select.Option>
                <Select.Option value="Nâng Cấp, Tối Ưu Tốc Độ & Bảo Trì">Nâng Cấp, Tối Ưu Tốc Độ &amp; Bảo Trì</Select.Option>
                <Select.Option value="Tư Vấn Thiết Kế UI/UX Chuyên Nghiệp">Tư Vấn Thiết Kế UI/UX Chuyên Nghiệp</Select.Option>
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
            name="notes"
            label={<span className="text-sm font-semibold text-slate-800">Mô tả tóm tắt yêu cầu dự án</span>}
          >
            <Input.TextArea
              rows={3}
              placeholder="Ví dụ: Cần thiết kế website bán hàng đa kênh có tích hợp thanh toán VNPay và đồng bộ kho hàng..."
            />
          </Form.Item>

          <div className="pt-2">
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={isSubmitting}
              className="rounded-xl font-bold bg-orange-600 hover:bg-orange-700 text-white h-11 text-sm shadow-md shadow-orange-500/25 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
            </Button>
          </div>
        </Form>
      )}
    </Modal>
  );
};
