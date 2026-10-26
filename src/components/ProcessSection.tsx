'use client';

import React from 'react';
import { 
  Search, 
  Palette, 
  Code2, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  FileCheck 
} from 'lucide-react';
import { PROCESS_DATA } from '../data/landingData';
import { HandDrawnMarker, AnimatedMarkerText } from './HandDrawnMarker';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-orange-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-orange-600" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-orange-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-orange-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-orange-600" />;
      default: return <Code2 className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#fff8f2]/80 border-y border-orange-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
            <span>QUY TRÌNH TRIỂN KHAI 5 BƯỚC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-snug">
            Quy Trình 5 Bước{' '}
            <HandDrawnMarker color="text-[#ea580c]" variant="brushStroke" delay={0.2}>
              Chuẩn Agile
            </HandDrawnMarker>{' '}
            Minh Bạch
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Mỗi giai đoạn đều có{' '}
            <AnimatedMarkerText markerColor="bg-yellow-300/80" delay={0.35}>
              sản phẩm bàn giao (Deliverables) cụ thể
            </AnimatedMarkerText>
            , cam kết{' '}
            <AnimatedMarkerText markerColor="bg-orange-200/90" delay={0.5}>
              đúng tiến độ theo hợp đồng pháp lý
            </AnimatedMarkerText>
            .
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_DATA.map((step, idx) => (
            <div
              key={step.step}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="relative bg-white rounded-3xl p-6 sm:p-7 border border-orange-100 hover:border-orange-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover-lift group"
            >
              <div>
                {/* Step Number & Duration Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-orange-500/25 group-hover:scale-110 transition-transform">
                    0{step.step}
                  </div>
                  <span className="text-xs font-bold text-orange-800 bg-orange-50 px-3 py-1 rounded-full flex items-center border border-orange-100">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {step.duration}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables list */}
                <div className="pt-3.5 border-t border-slate-100 space-y-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Bàn giao mỗi giai đoạn:
                  </span>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start text-sm text-slate-700 font-medium">
                      <FileCheck className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status indicator */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Giai đoạn {step.step}/5</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
