'use client';

import React from 'react';
import { Tag, Button } from 'antd';
import { 
  ShoppingBag, 
  PackageCheck, 
  Building2, 
  CalendarCheck, 
  CheckCircle2, 
  Clock, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/landingData';
import { HandDrawnMarker, AnimatedMarkerText } from './HandDrawnMarker';
import { Interactive3DTilt } from './Interactive3DTilt';

interface SolutionsSectionProps {
  onSelectSolution: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-orange-600" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6 text-orange-600" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-orange-600" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-orange-600" />;
      default: return <Building2 className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-[#fffbf8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider border border-orange-200">
            <span>GIẢI PHÁP CHUYÊN SÂU THEO NGÀNH NGHỀ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-snug">
            Số Hóa{' '}
            <HandDrawnMarker color="text-[#ea580c]" variant="wobbly2" delay={0.2}>
              Quy Trình Vận Hành
            </HandDrawnMarker>{' '}
            Cho Từng Lĩnh Vực
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Mỗi ngành nghề có đặc thù vận hành riêng biệt. Chúng tôi mang đến các giải pháp phần mềm chuyên ngành đã được đóng gói và kiểm chứng thực tế,{' '}
            <AnimatedMarkerText markerColor="bg-yellow-300/80" delay={0.35}>
              rút ngắn 50% thời gian triển khai
            </AnimatedMarkerText>
            .
          </p>
        </div>

        {/* 2x2 Grid of In-depth Solutions with Interactive 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SOLUTIONS_DATA.map((sol, idx) => (
            <Interactive3DTilt
              key={sol.id}
              maxTilt={5}
              scale={1.015}
              enableGlare={true}
              className="h-full"
            >
              <div
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="h-full bg-white rounded-3xl p-6 sm:p-9 border border-orange-100 hover:border-orange-300 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between hover-lift"
              >
                <div>
                  {/* Header of Solution Card */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                      {getSolutionIcon(sol.iconName)}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm font-semibold text-orange-800 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {sol.timeline}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5 leading-snug">
                    {sol.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-orange-600 mb-3">
                    {sol.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-3 mb-6">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                      Lợi ích vận hành thực tế:
                    </p>
                    {sol.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start text-sm sm:text-[15px] text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Suitable For */}
                  <div className="pt-4 border-t border-slate-200/80 mb-6">
                    <p className="text-sm font-bold text-slate-600 mb-2.5 flex items-center">
                      <Users className="w-4 h-4 mr-1.5 text-slate-400" />
                      Phù hợp tối ưu cho:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sol.suitableFor.map((item, sIdx) => (
                        <span key={sIdx} className="text-xs sm:text-sm px-3 py-1 rounded-lg bg-orange-50/50 border border-orange-100 font-medium text-slate-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <Button
                  type="primary"
                  onClick={() => onSelectSolution(sol.title)}
                  className="rounded-xl font-bold bg-orange-600 hover:bg-orange-700 h-12 text-sm sm:text-base flex items-center justify-center space-x-2"
                >
                  <span>Đăng Ký Nhận Demo Giải Pháp Này</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Interactive3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
};
