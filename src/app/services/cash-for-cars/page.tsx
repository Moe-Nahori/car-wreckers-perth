import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import ServiceHero from './components/ServiceHero';
import MaximumValue from './components/MaximumValue';
import Benefits from './components/Benefits';
import ServiceAreas from './components/ServiceAreas';
import CarConditions from './components/CarConditions';
import ProcessSteps from './components/ProcessSteps';
import Testimonials from './components/Testimonials';
import WeBuyAnyBrand from './components/WeBuyAnyBrand';
import { QuoteForm } from '@/components';
import { companyInfo } from '@/config/company-info';
import CallToAction from '@/components/services/CallToAction';
import FrequentlyAskedQuestions from './components/FAQ';
import AreaCoverage from './components/AreaCoverage';

export const metadata = generateMetadata({
  title: 'Cash For Cars Perth | Top Dollar Paid | Instant Cash Up To $9,999',
  description: 'Get the best cash for cars in Perth. Instant quotes, same-day pickup, and immediate cash payment. We buy any car in any condition across ALL Perth suburbs. Free car removal included.',
  path: '/services/cash-for-cars',
});

export default function CashForCarsPage() {
  return (
    <main>
      <ServiceHero />
      <MaximumValue />
      <Benefits />
      <ServiceAreas />
      <CarConditions />
      <ProcessSteps />
      <Testimonials />
      <WeBuyAnyBrand />
      <QuoteForm />
      <FrequentlyAskedQuestions />
      <AreaCoverage />
      <CallToAction
        title="Ready to Get Cash for Your Car?"
        description="Get an instant quote and same-day cash payment. Any car, any condition!"
        buttonText="Get Quote Now"
        buttonLink="#quote-form"
      />
    </main>
  );
}