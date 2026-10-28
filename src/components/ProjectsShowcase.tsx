'use client';

import React, { useState, useEffect } from 'react';
import { Tag, Button } from 'antd';
import AOS from 'aos';
import { 
  ExternalLink, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  Globe
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/landingData';
import { ProjectItem } from '../types/landing';
import { HandDrawnMarker, AnimatedMarkerText } from './HandDrawnMarker';
import { Interactive3DTilt } from './Interactive3DTilt';

interface ProjectsShowcaseProps {
  onSelectProjectInquiry: (projectName: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProjectInquiry }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  const filterTabs = [
    { key: 'all', label: `Tất Cả Dự Án (${PROJECTS_DATA.length})` },
    { key: 'web-corporate', label: 'Website Doanh Nghiệp & Dịch Vụ' },
    { key: 'ecommerce', label: 'Thương Mại Điện Tử & F&B' },
    { key: 'landing-page', label: 'Landing Page Sự Kiện & Chuyển Đổi' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#fff8f2]/90 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>DỰ ÁN ĐÃ THỰC HIỆN TIÊU BIỂU</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-snug">
            Sản Phẩm Thực Tế &amp;{' '}
            <HandDrawnMarker color="text-[#ea580c]" variant="heroTop" delay={0.2}>
              Trải Nghiệm Trực Tiếp
            </HandDrawnMarker>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Khám phá các website và nền tảng số thực tế do T&amp;T Digital thiết kế và lập trình cho khách hàng trong nước và quốc tế. Bạn có thể{' '}
            <AnimatedMarkerText markerColor="bg-orange-200/90" delay={0.35}>
              bấm vào xem trực tiếp từng dự án đang chạy thực tế
            </AnimatedMarkerText>
            .
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20'
                    : 'bg-white text-slate-600 hover:bg-orange-50 hover:text-orange-700 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Interactive 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Interactive3DTilt
              key={project.id}
              maxTilt={6}
              scale={1.02}
              enableGlare={true}
              className="h-full"
            >
              <div
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 120}
                className="h-full bg-white rounded-3xl overflow-hidden border border-orange-100/90 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover-lift group"
              >
                <div>
                  {/* Project Image banner */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-slate-800 shadow-sm backdrop-blur-xs">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-600/95 text-white shadow-sm flex items-center space-x-1.5 backdrop-blur-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>Live Demo</span>
                      </span>
                    </div>

                    {/* Impact Metric badge on image */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <div className="flex items-center space-x-1.5 bg-orange-600/95 backdrop-blur-xs px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold shadow-sm">
                        <TrendingUp className="w-4 h-4 flex-shrink-0" />
                        <span>{project.impact.metric}</span>
                        <span className="text-white/90 font-normal text-xs truncate max-w-[170px]">{project.impact.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 sm:p-7">
                    <div className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Khách hàng: {project.client}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Key Highlights */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.highlights.map((hl, hIdx) => (
                        <span key={hIdx} className="text-xs sm:text-sm font-medium bg-orange-50/90 text-orange-950 border border-orange-100/80 px-3 py-1 rounded-lg">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-2 space-y-2.5">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 rounded-xl font-bold bg-orange-600 hover:bg-orange-700 text-white h-11 text-sm shadow-md shadow-orange-500/20 transition-all hover:shadow-orange-500/35 cursor-pointer"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Xem Trực Tiếp (Live Demo)</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  )}
                  
                  <Button
                    block
                    type="default"
                    onClick={() => onSelectProjectInquiry(project.title)}
                    className="rounded-xl font-bold text-slate-700 hover:text-orange-600 hover:border-orange-500 h-10 text-xs sm:text-sm flex items-center justify-center space-x-1.5"
                  >
                    <span>Tư Vấn Mô Hình Này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </Interactive3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
};
