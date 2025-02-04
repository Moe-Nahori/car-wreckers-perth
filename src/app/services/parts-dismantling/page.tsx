'use client';

import React from 'react';
import Link from 'next/link';

// Import all component sections
import BreadcrumbNav from '@/components/services/parts-dismantling/BreadcrumbNav';
import TrustSignalsSection from '@/components/services/parts-dismantling/TrustSignalsSection';
import BenefitsSection from '@/components/services/parts-dismantling/BenefitsSection';
import PartsCategoriesSection from '@/components/services/parts-dismantling/PartsCategoriesSection';
import ProcessSection from '@/components/services/parts-dismantling/ProcessSection';
import QualityGuaranteeSection from '@/components/services/parts-dismantling/QualityGuaranteeSection';
import FAQSection from '@/components/services/parts-dismantling/FAQSection';
import CTASection from '@/components/services/parts-dismantling/CTASection';

const PartsDismantlingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <BreadcrumbNav
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Parts Dismantling', href: '/services/parts-dismantling' }
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-6 md:p-12 mb-12 md:mb-16 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Professional Auto Parts Dismantling Perth
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Expert car dismantling service with quality tested parts and eco-friendly recycling. 
            We handle all makes and models with warranty-backed parts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/quote" className="bg-white text-slate-800 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Request Parts Quote
            </Link>
            <a href="tel:0412345678" className="bg-green-500 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Trust Signals Section */}
      <div className="mb-12 md:mb-16">
        <TrustSignalsSection />
      </div>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Parts Categories */}
      <PartsCategoriesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Quality Guarantee */}
      <QualityGuaranteeSection />

      {/* FAQ Section */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <FAQSection />
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default PartsDismantlingPage;