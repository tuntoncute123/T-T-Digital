'use client';

import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Globe, 
  Cpu, 
  CreditCard, 
  Cloud, 
  Building2, 
  Database 
} from 'lucide-react';

export const TechStackTicker: React.FC = () => {
  const highlights = [
    { title: 'Chuẩn Bảo Mật Đa Tầng ISO', desc: 'Bảo vệ dữ liệu khách hàng tuyệt đối', icon: ShieldCheck },
    { title: 'Tối Ưu Google Core Web Vitals', desc: 'Điểm hiệu năng tải trang 95+', icon: Globe },
    { title: 'Tích Hợp Cổng Thanh Toán', desc: 'VNPay, MoMo, ZaloPay, Visa/Master', icon: CreditCard },
    { title: 'Hạ Tầng Cloud Chịu Tải Cao', desc: 'Cam kết hoạt động ổn định 99.98%', icon: Cloud },
    { title: 'Đồng Bộ Đa Nền Tảng & Sàn TMĐT', desc: 'Shopee, TikTok Shop, MISA, FAST', icon: Database },
    { title: 'Kiến Trúc Mở Rộng Linh Hoạt', desc: 'Sẵn sàng quy mô hàng triệu người dùng', icon: Cpu }
  ];

  return (
    <section className="bg-[#fffbf8] py-8 border-b border-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-900/80">
            Tiêu Chuẩn Công Nghệ &amp; Năng Lực Tích Hợp Toàn Diện
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="p-4 rounded-2xl bg-white hover:bg-orange-50/70 border border-orange-100/90 hover:border-orange-300 transition-all duration-200 text-center flex flex-col items-center group cursor-default shadow-xs hover-lift"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-2.5 shadow-xs group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug mb-1 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
