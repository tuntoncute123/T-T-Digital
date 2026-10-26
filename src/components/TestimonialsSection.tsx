'use client';

import React from 'react';
import { Collapse, Rate } from 'antd';
import { 
  Quote, 
  MessageSquare, 
  HelpCircle, 
  CheckCircle2, 
  ChevronDown 
} from 'lucide-react';
import { TESTIMONIALS_DATA, FAQ_DATA } from '../data/landingData';
import { HandDrawnMarker, AnimatedMarkerText } from './HandDrawnMarker';

export const TestimonialsSection: React.FC = () => {
  const faqItems = FAQ_DATA.map((faq, idx) => ({
    key: String(idx),
    label: (
      <span className="font-bold text-base sm:text-lg text-slate-800">
        {faq.question}
      </span>
    ),
    children: (
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
        {faq.answer}
      </p>
    )
  }));

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#fff8f2]/90 border-t border-orange-100/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ĐÁNH GIÁ TỪ KHÁCH HÀNG THỰC TẾ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-snug">
            Niềm Tin Được Xây Dựng Từ{' '}
            <HandDrawnMarker color="text-[#ea580c]" variant="heroTop" delay={0.2}>
              Dự Án Thành Công
            </HandDrawnMarker>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Hơn{' '}
            <AnimatedMarkerText markerColor="bg-orange-200/90" delay={0.35}>
              98% khách hàng tiếp tục gia hạn hợp đồng
            </AnimatedMarkerText>{' '}
            nâng cấp và giới thiệu T&amp;T Digital cho các đối tác chiến lược trong mạng lưới của họ.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={t.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-orange-100/80 hover:border-orange-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover-lift relative"
            >
              <Quote className="w-9 h-9 text-orange-200 absolute top-6 right-6" />

              <div>
                {/* 5-star rating */}
                <div className="mb-3.5">
                  <Rate disabled defaultValue={t.rating} className="text-amber-400 text-base" />
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-slate-600 italic leading-relaxed mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Project Tag */}
                <span className="text-xs sm:text-sm font-bold text-orange-800 bg-orange-50 border border-orange-100/60 px-3 py-1.5 rounded-lg inline-block mb-4">
                  {t.projectType}
                </span>
              </div>

              {/* Author info */}
              <div className="flex items-center space-x-3.5 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-orange-100"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900 leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-500">
                    {t.position} - {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-orange-200/80" data-aos="fade-up">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>CÂU HỎI THƯỜNG GẶP (FAQ)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Giải Đáp Những Thắc Mắc Trước Khi Ký Kết
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xs border border-orange-100">
            <Collapse
              items={faqItems}
              defaultActiveKey={['0']}
              bordered={false}
              className="bg-transparent"
              expandIconPlacement="end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
