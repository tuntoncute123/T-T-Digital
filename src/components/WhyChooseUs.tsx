'use client';

import React from 'react';
import { 
  Palette, 
  Zap, 
  FileCode2, 
  Clock, 
  Headphones, 
  ShieldAlert, 
  CheckCircle2, 
  ShieldCheck, 
  Award 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/landingData';
import { HandDrawnMarker, AnimatedMarkerText } from './HandDrawnMarker';
import { Interactive3DTilt } from './Interactive3DTilt';

export const WhyChooseUs: React.FC = () => {
  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-6 h-6 text-orange-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'FileCode2': return <FileCode2 className="w-6 h-6 text-orange-700" />;
      case 'Clock': return <Clock className="w-6 h-6 text-orange-600" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-rose-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#fffbf8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>CAM KẾT NĂNG LỰC T&amp;T DIGITAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-snug">
            Vì Sao Doanh Nghiệp Chọn{' '}
            <HandDrawnMarker color="text-[#ea580c]" variant="wobbly1" delay={0.2}>
              T&amp;T Digital?
            </HandDrawnMarker>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Mỗi thiết kế và dòng code đều là{' '}
            <AnimatedMarkerText markerColor="bg-orange-200/90" delay={0.35}>
              xương sống vận hành &amp; bộ mặt thương hiệu
            </AnimatedMarkerText>{' '}
            của bạn. Dưới đây là những cam kết tạo nên uy tín vững chắc của chúng tôi.
          </p>
        </div>

        {/* 6 Grid items with Interactive 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <Interactive3DTilt
              key={item.id}
              maxTilt={7}
              scale={1.02}
              enableGlare={true}
              className="h-full"
            >
              <div
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="h-full p-7 sm:p-8 rounded-3xl bg-white border border-orange-100/80 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-start hover-lift group"
              >
                <div className="w-13 h-13 rounded-2xl bg-orange-50/80 border border-orange-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getWhyIcon(item.iconName)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Interactive3DTilt>
          ))}
        </div>

        {/* Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white shadow-xl shadow-orange-500/25 border border-orange-400/40 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span>Cam Kết</span>
              <HandDrawnMarker color="text-slate-900" textColor="text-white" variant="brushStroke" delay={0.25} className="mx-1">
                100% Không Dùng Theme Cũ
              </HandDrawnMarker>
              <span>Làm Sẵn</span>
            </h4>
            <p className="text-sm sm:text-base text-white/90">
              Mọi sản phẩm tại T&amp;T Digital được nghiên cứu nghiệp vụ và lập trình chuyên biệt cho từng bài toán kinh doanh.
            </p>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <span className="text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-xs">
              Ký Hợp Đồng Pháp Lý
            </span>
            <span className="text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl bg-white text-orange-700 shadow-md">
              Xuất VAT Đầy Đủ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
