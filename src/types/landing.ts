export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  shortDesc: string;
  description: string;
  features: string[];
  metrics: string;
  iconName: string;
  popular?: boolean;
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  suitableFor: string[];
  timeline: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'web-corporate' | 'ecommerce' | 'software-erp' | 'mobile-app' | 'landing-page';
  categoryLabel: string;
  image: string;
  summary: string;
  highlights: string[];
  impact: {
    metric: string;
    label: string;
  };
  liveDemoUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceEstimate: string;
  unit: string;
  suitable: string;
  timeEstimate: string;
  features: string[];
  notIncluded?: string[];
}
