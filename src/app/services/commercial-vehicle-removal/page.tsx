import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import QuoteForm from '@/components/sections/QuoteForm';
import ServiceDescription from '@/components/services/ServiceDescription';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import AcceptedVehicles from '@/components/services/AcceptedVehicles';
import CallToAction from '@/components/services/CallToAction';
import ProcessSteps from './components/ProcessSteps';
import Benefits from './components/Benefits';
import ServiceAreaInfo from './components/ServiceAreaInfo';
import ServiceFAQ from './components/ServiceFAQ';
import ServiceHero from './components/ServiceHero';

export const metadata = generateMetadata({
  title: 'Commercial Vehicle Removal Perth | Cash for Trucks & Vans | Fleet Disposal Experts',
  description: 'Professional commercial vehicle removal service in Perth. Specializing in trucks, vans, fleet disposals, and heavy vehicle removal. Licensed, insured, with complete business documentation support.',
  path: '/services/commercial-vehicle-removal',
});

const serviceDescription = [
  "Car Wreckers Perth provides comprehensive commercial vehicle removal services across the Perth metropolitan area. We specialize in handling all types of business vehicles, from small commercial vans to heavy trucks and entire fleets. Our service is designed to meet the specific needs of businesses, with full documentation support and compliance with commercial regulations.",
  "Our team is equipped to handle large-scale commercial operations, offering fleet disposal solutions that align with your business timeline and requirements. We understand the importance of minimal disruption to your operations and provide flexible scheduling options for vehicle removals, including after-hours service when needed.",
  "As licensed and insured commercial vehicle specialists, we ensure all removals comply with industry regulations and environmental standards. Our service includes complete documentation for tax and audit purposes, making the process smooth and business-friendly. We also provide fleet modernization consultation to help optimize your vehicle replacement strategy."
];

const reasons = [
  {
    title: "Business Documentation",
    description: "Complete paperwork support including tax receipts, disposal certificates, and fleet management documentation."
  },
  {
    title: "Fleet Disposal Experts",
    description: "Specialized in handling multiple vehicle removals with minimal disruption to your business operations."
  },
  {
    title: "Heavy Vehicle Capability",
    description: "Equipped to handle all sizes of commercial vehicles, from vans to heavy trucks and machinery."
  },
  {
    title: "Compliance Assured",
    description: "Fully licensed and insured, with strict adherence to commercial vehicle disposal regulations."
  },
  {
    title: "Flexible Scheduling",
    description: "After-hours and weekend services available to accommodate your business schedule."
  },
  {
    title: "Environmental Certification",
    description: "Eco-friendly disposal methods with proper certification for your environmental compliance records."
  }
];

const vehicleTypes = [
  {
    type: "Commercial Trucks",
    description: "All sizes of trucks including rigid trucks, prime movers, and delivery trucks."
  },
  {
    type: "Business Vans",
    description: "Commercial vans, cargo vans, and passenger transport vehicles of all makes."
  },
  {
    type: "Fleet Vehicles",
    description: "Complete fleet disposal services for businesses updating their vehicle inventory."
  },
  {
    type: "Construction Vehicles",
    description: "Specialized construction and industrial vehicles requiring expert handling."
  },
  {
    type: "Delivery Vehicles",
    description: "Courier vans, refrigerated trucks, and other specialized delivery vehicles."
  },
  {
    type: "Heavy Equipment",
    description: "Large commercial equipment and specialized business vehicles."
  }
];

export default function CommercialVehicleRemoval() {
  return (
    <main className="min-h-screen">
      <ServiceHero
        title="Commercial Vehicle Removal Perth"
        subtitle="Expert Fleet & Heavy Vehicle Disposal Solutions"
        description="Professional removal service for all commercial vehicles. Specialized in fleet disposal, trucks, and vans, with complete business documentation support."
      />
      
      <div className="space-y-12">
        <ServiceDescription 
          title="Professional Commercial Vehicle Removal Services in Perth"
          description={serviceDescription}
        />
        
        <WhyChooseUs reasons={reasons} />
        
        <AcceptedVehicles
          title="Commercial Vehicles We Handle"
          subtitle="Comprehensive removal services for all types of business vehicles"
          vehicleTypes={vehicleTypes}
        />
        
        <ProcessSteps />
        <Benefits />
        
        <QuoteForm />
        
        <ServiceAreaInfo />
        
        <ServiceFAQ />
        
        <CallToAction
          title="Get a Business Quote Today"
          description="Professional commercial vehicle removal with complete documentation. Contact us for a tailored business solution."
          buttonText="Request Business Quote"
          buttonLink="#quote-form"
        />
      </div>
    </main>
  );
}