'use client';

import React, { useState, useEffect } from 'react';
import { ConfigProvider, App } from 'antd';
import AOS from 'aos';

import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { TechStackTicker } from '../components/TechStackTicker';
import { ServicesSection } from '../components/ServicesSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { ProcessSection } from '../components/ProcessSection';
import { CostEstimator } from '../components/CostEstimator';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingSideCTA } from '../components/FloatingSideCTA';
import { ConsultationModal } from '../components/ConsultationModal';

export default function AppContent() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('');
  const [projectDetailsForModal, setProjectDetailsForModal] = useState<{
    projectType: string;
    selectedAddons: string[];
    estimatedPrice: string;
    estimatedTime: string;
  } | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      delay: 40,
    });
  }, []);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName || '');
    setProjectDetailsForModal(null);
    setConsultationModalOpen(true);
  };

  const handleOpenWithProjectDetails = (details: {
    projectType: string;
    selectedAddons: string[];
    estimatedPrice: string;
    estimatedTime: string;
  }) => {
    setSelectedServiceForModal(details.projectType);
    setProjectDetailsForModal(details);
    setConsultationModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ea580c',
          borderRadius: 14,
          fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
          fontSize: 15,
          fontSizeLG: 16,
          colorLink: '#ea580c',
          colorLinkHover: '#c2410c',
          colorBgContainer: '#ffffff',
        },
      }}
    >
      <App>
        <div className="min-h-screen flex flex-col bg-[#fffaf5] text-slate-900 selection:bg-orange-200 selection:text-orange-950">
          
          {/* Main Top Navigation */}
          <Navbar
            onOpenConsultation={() => handleOpenConsultation()}
            onScrollToEstimator={() => scrollToSection('cost-estimator')}
          />

          {/* Landing Page Content Sections */}
          <main className="flex-1">
            {/* 1. Hero Section */}
            <HeroSection
              onOpenConsultation={() => handleOpenConsultation()}
              onScrollToEstimator={() => scrollToSection('cost-estimator')}
              onScrollToProjects={() => scrollToSection('projects')}
            />

            {/* 2. Technical Capabilities & Certified Standards Ticker */}
            <TechStackTicker />

            {/* 3. Core Services */}
            <ServicesSection
              onSelectService={(service) => handleOpenConsultation(service)}
            />

            {/* 4. Specialized Industry Solutions */}
            <SolutionsSection
              onSelectSolution={(solution) => handleOpenConsultation(solution)}
            />

            {/* 5. 5-Step Agile Delivery Process */}
            <ProcessSection />

            {/* 6. Interactive 30s Project Cost Estimator */}
            <CostEstimator
              onRequestQuoteWithDetails={handleOpenWithProjectDetails}
            />

            {/* 7. Featured Case Studies & Projects */}
            <ProjectsShowcase
              onSelectProjectInquiry={(project) => handleOpenConsultation(`Tư vấn dự án tương tự: ${project}`)}
            />

            {/* 8. Why Choose T&T Digital */}
            <WhyChooseUs />

            {/* 9. Testimonials & Enterprise FAQ */}
            <TestimonialsSection />

            {/* 10. Direct Contact & Consultation Form */}
            <ContactSection />
          </main>

          {/* Global Corporate Footer */}
          <Footer
            onScrollTo={scrollToSection}
            onOpenConsultation={() => handleOpenConsultation()}
          />

          {/* Floating Action Bar (Side CTA) */}
          <FloatingSideCTA
            onOpenConsultation={() => handleOpenConsultation()}
            onScrollToEstimator={() => scrollToSection('cost-estimator')}
          />

          {/* Consultation & Quote Modal */}
          <ConsultationModal
            open={consultationModalOpen}
            onClose={() => setConsultationModalOpen(false)}
            initialService={selectedServiceForModal}
            initialProjectDetails={projectDetailsForModal}
          />
        </div>
      </App>
    </ConfigProvider>
  );
}
