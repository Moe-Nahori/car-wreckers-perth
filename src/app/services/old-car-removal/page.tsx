import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import QuoteForm from '@/components/sections/QuoteForm';
import ProcessSteps from './components/ProcessSteps';
import Benefits from './components/Benefits';
import ServiceAreaInfo from './components/ServiceAreaInfo';
import ServiceFAQ from './components/ServiceFAQ';
import ServiceHero from './components/ServiceHero';
import ServiceDescription from '@/components/services/ServiceDescription';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import AcceptedVehicles from '@/components/services/AcceptedVehicles';
import CallToAction from '@/components/services/CallToAction';

export const metadata = generateMetadata({
  title: 'Old Car Removal Perth | Best Cash for Unwanted Cars | Car Wreckers Perth',
  description: 'Professional old car removal service in Perth. Get top cash for unwanted, aged, or end-of-life vehicles. Free removal, instant quotes, and eco-friendly recycling across Perth metro.',
  path: '/services/old-car-removal',
});

const serviceDescription = [
  "At Car Wreckers Perth, we specialize in providing professional old car removal services throughout the Perth metropolitan area. Whether your vehicle has been sitting unused for years, has become too expensive to maintain, or has reached the end of its life, we offer competitive cash payments and free removal services.",
  "Our environmentally conscious team handles all types of old vehicles, from regular cars to vintage models. We understand that parting with a long-owned vehicle can be emotional, which is why we ensure a respectful and professional service while offering the best possible value for your old car.",
  "We're committed to eco-friendly vehicle recycling, ensuring that up to 85% of your old car's materials are recycled or properly disposed of. Our service includes free towing, instant cash payments, and assistance with all necessary paperwork, including deregistration if required."
];

const reasons = [
  {
    title: "Eco-Friendly Recycling",
    description: "We recycle up to 85% of every vehicle, ensuring minimal environmental impact and maximum resource recovery."
  },
  {
    title: "Instant Cash Payments",
    description: "Receive immediate payment when we collect your old car, with some of the most competitive rates in Perth."
  },
  {
    title: "Free Removal Service",
    description: "No-cost towing across the Perth metro area, regardless of your vehicle's condition or location."
  },
  {
    title: "Paperwork Assistance",
    description: "We help with all necessary documentation, including deregistration paperwork and transfer of ownership."
  },
  {
    title: "Vintage Car Expertise",
    description: "Special consideration and valuation for vintage or classic cars, ensuring you get the best value."
  },
  {
    title: "Same-Day Service",
    description: "Quick response times with same-day pickup available to help you clear your space immediately."
  }
];

const vehicleTypes = [
  {
    type: "End-of-Life Vehicles",
    description: "Cars that have reached the end of their serviceable life or are too costly to maintain."
  },
  {
    type: "Long-Term Unused Cars",
    description: "Vehicles that have been sitting unused for extended periods, taking up valuable space."
  },
  {
    type: "Vintage & Classic Cars",
    description: "Older model vehicles, including potential classic or vintage cars requiring evaluation."
  },
  {
    type: "High-Mileage Vehicles",
    description: "Cars with excessive mileage that are becoming unreliable or expensive to maintain."
  },
  {
    type: "Deteriorated Vehicles",
    description: "Cars suffering from age-related issues like rust, mechanical problems, or structural deterioration."
  },
  {
    type: "Non-Running Vehicles",
    description: "Old cars that no longer start or run, regardless of the cause."
  }
];

export default function OldCarRemoval() {
  return (
    <main className="min-h-screen">
      <ServiceHero
        title="Old Car Removal Perth"
        subtitle="Turn Your Old Car into Instant Cash"
        description="Get rid of your old or unwanted car and receive top dollar. Eco-friendly disposal with free towing and same-day service available across Perth."
      />
      
      <div className="space-y-12">
        <ServiceDescription 
          title="Professional Old Car Removal Services in Perth"
          description={serviceDescription}
        />
        
        <WhyChooseUs reasons={reasons} />
        
        <AcceptedVehicles
          title="Types of Old Vehicles We Accept"
          subtitle="We buy all types of old and unwanted vehicles, with special consideration for vintage models"
          vehicleTypes={vehicleTypes}
        />
        
        <ProcessSteps />
        <Benefits />
        
        <QuoteForm />
        
        <ServiceAreaInfo />
        
        <ServiceFAQ />
        
        <CallToAction
          title="Get an Instant Quote for Your Old Vehicle"
          description="Turn your old car into cash today! Free removal service and top dollar paid."
          buttonText="Get Free Quote"
          buttonLink="#quote-form"
        />
      </div>
    </main>
  );
}