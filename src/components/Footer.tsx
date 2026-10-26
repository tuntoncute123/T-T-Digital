'use client';

import React from 'react';
import { 
  Code2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Globe 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenConsultation }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="T&T Digital Logo"
                className="h-10 sm:h-12 w-auto object-contain bg-white/10 p-1.5 rounded-xl border border-white/15"
              />
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {COMPANY_INFO.shortBio}
            </p>

            <div className="pt-2 text-xs sm:text-sm text-slate-400 space-y-1.5">
              <p>Mã số doanh nghiệp: <span className="text-slate-200 font-medium">0315892468</span> do Sở KH&amp;ĐT TP.HCM cấp.</p>
              <p>Tiêu chuẩn quy trình quản lý chất lượng: <span className="text-orange-400 font-semibold">ISO 9001 &amp; ISO 27001</span></p>
            </div>
          </div>

          {/* Column 2: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-base font-bold uppercase tracking-wider text-white">
              Dịch Vụ Cốt Lõi
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <button 
                  onClick={() => onScrollTo('services')} 
                  className="hover:text-orange-400 transition-colors text-left cursor-pointer"
                >
                  Thiết Kế Website Doanh Nghiệp Chuẩn SEO
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('services')} 
                  className="hover:text-orange-400 transition-colors text-left cursor-pointer"
                >
                  Website Bán Hàng &amp; E-Commerce Cao Cấp
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('services')} 
                  className="hover:text-orange-400 transition-colors text-left cursor-pointer"
                >
                  Phần Mềm Quản Trị ERP / CRM Chuyên Sâu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('services')} 
                  className="hover:text-orange-400 transition-colors text-left cursor-pointer"
                >
                  Lập Trình Ứng Dụng Di Động (iOS &amp; Android)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('services')} 
                  className="hover:text-orange-400 transition-colors text-left cursor-pointer"
                >
                  Tích Hợp API &amp; Chuyển Đổi Số Tự Động
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('services')} 
                  className="hover:text-orange-400 transition-colors text-left cursor-pointer"
                >
                  Nâng Cấp &amp; Tối Ưu Tốc Độ PageSpeed
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industry Solutions & Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-base font-bold uppercase tracking-wider text-white">
              Giải Pháp Số
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <button onClick={() => onScrollTo('solutions')} className="hover:text-orange-400 transition-colors text-left cursor-pointer">
                  Bán Hàng Đa Kênh
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('solutions')} className="hover:text-orange-400 transition-colors text-left cursor-pointer">
                  Quản Lý Kho &amp; Đội Xe
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('solutions')} className="hover:text-orange-400 transition-colors text-left cursor-pointer">
                  Cổng B2B Đại Lý
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('solutions')} className="hover:text-orange-400 transition-colors text-left cursor-pointer">
                  CRM &amp; Lịch Hẹn Dịch Vụ
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('cost-estimator')} className="hover:text-orange-300 transition-colors text-left cursor-pointer text-orange-400 font-semibold">
                  Dự Toán Ngân Sách
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hotline (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-base font-bold uppercase tracking-wider text-white">
              Thông Tin Liên Hệ
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 text-orange-400 mr-2.5 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 text-orange-400 mr-2.5 flex-shrink-0" />
                <span>Hotline: <strong className="text-white">{COMPANY_INFO.hotline}</strong></span>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 text-orange-400 mr-2.5 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 text-orange-400 mr-2.5 flex-shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm transition-colors shadow-md shadow-orange-600/25 cursor-pointer"
              >
                Nhận Báo Giá Dự Án Nhanh
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} T&amp;T Digital. Toàn bộ bản quyền được bảo lưu.
          </p>

          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Chính Sách Bảo Mật</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Điều Khoản Dịch Vụ</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Chính Sách Bảo Hành</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
