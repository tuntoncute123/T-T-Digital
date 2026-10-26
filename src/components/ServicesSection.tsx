'use client';

import React, { useState, useEffect } from 'react';
import { Tag, Button } from 'antd';
import AOS from 'aos';
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  Layers, 
  ShieldCheck, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/landingData';
import { ServiceItem } from '../types/landing';
import { HandDrawnMarker, AnimatedMarkerText, ChunkHighlight } from './HandDrawnMarker';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-orange-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-orange-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-orange-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-orange-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-orange-600" />;
      case 'Compass': return <Compass className="w-6 h-6 text-orange-600" />;
      default: return <Globe className="w-6 h-6 text-orange-600" />;
    }
  };

  const categories = [
    { key: 'all', label: 'Tất Cả Dịch Vụ' },
    { key: 'web', label: 'Thiết Kế Website' },
    { key: 'software', label: 'Phần Mềm Quản Trị' },
    { key: 'mobile', label: 'Ứng Dụng Mobile' },
  ];

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web') return item.id === 'web-design' || item.id === 'ui-ux-design';
    if (activeCategory === 'software') return item.id === 'custom-software' || item.id === 'digital-transformation' || item.id === 'performance-security';
    if (activeCategory === 'mobile') return item.id === 'mobile-app';
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#fff8f2]/90 border-b border-orange-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
            <span>DỊCH VỤ CỐT LÕI TẠI T&amp;T DIGITAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-snug">
            Giải Pháp Công Nghệ{' '}
            <HandDrawnMarker color="text-[#ea580c]" variant="wobbly1" delay={0.2}>
              Toàn Diện
            </HandDrawnMarker>{' '}
            Cho Doanh Nghiệp
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Chúng tôi không chỉ viết mã, chúng tôi thiết kế giải pháp số hóa toàn diện giúp doanh nghiệp{' '}
            <AnimatedMarkerText markerColor="bg-yellow-300/80" delay={0.3}>
              tối ưu chi phí &amp; tự động hóa quy trình
            </AnimatedMarkerText>
            , tạo đòn bẩy{' '}
            <AnimatedMarkerText markerColor="bg-orange-200/90" delay={0.45}>
              gia tăng doanh số bền vững
            </AnimatedMarkerText>
            .
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-500/25'
                    : 'bg-white text-slate-600 hover:bg-orange-50/60 border border-orange-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 120}
              className={`relative bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between hover-lift ${
                service.popular 
                  ? 'border-orange-400 shadow-lg shadow-orange-500/5 ring-1 ring-orange-400/30' 
                  : 'border-orange-100/90 shadow-xs hover:border-orange-300'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-sm">
                  {service.badge}
                </div>
              )}

              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {!service.popular && (
                    <Tag color="orange" className="font-semibold text-xs sm:text-sm px-2.5 py-0.5 rounded-md">
                      {service.category}
                    </Tag>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 leading-snug">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-6 pt-3.5 border-t border-slate-100">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start text-sm sm:text-[15px] text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center text-xs sm:text-sm font-bold text-orange-800 bg-orange-50 px-3.5 py-2 rounded-xl border border-orange-100/80">
                  <TrendingUp className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                  <span>{service.metrics}</span>
                </div>

                <Button
                  block
                  type="default"
                  onClick={() => onSelectService(service.title)}
                  className="rounded-xl font-bold text-slate-700 hover:text-orange-600 hover:border-orange-500 h-11 text-sm sm:text-base flex items-center justify-center space-x-2"
                >
                  <span>Tư Vấn Dịch Vụ Này</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
