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
  title: 'Accident Car Removal Perth | Instant Cash for Damaged Cars | Car Wreckers Perth',
  description: 'Expert accident car removal service in Perth. Get top cash for damaged, wrecked, or accident vehicles. Free towing, instant quotes, and same-day removal across Perth metro area.',
  path: '/services/accident-car-removal',
});

const serviceDescription = [
  "At Car Wreckers Perth, we specialize in providing professional accident car removal services across the Perth metropolitan area. Whether your vehicle has been involved in a minor fender bender or a major collision, we offer competitive cash payments and free removal services.",
  "Our experienced team handles all types of accident-damaged vehicles, from slightly damaged cars to completely wrecked vehicles. We understand that dealing with an accident-damaged car can be stressful, which is why we've made our process as simple and straightforward as possible.",
  "We're fully licensed and insured, ensuring your accident vehicle removal is handled professionally and in compliance with all local regulations. Our service includes free towing, instant cash payments, and same-day removal options for your convenience."
];

const reasons = [
  {
    title: "Instant Cash Payments",
    description: "Get paid on the spot when we pick up your accident-damaged vehicle, with some of the best rates in Perth."
  },
  {
    title: "Free Towing Service",
    description: "We provide complimentary towing across the Perth metro area, saving you hundreds in removal costs."
  },
  {
    title: "Same-Day Removal",
    description: "Quick response times with same-day pickup available to help you clear your space faster."
  },
  {
    title: "Licensed & Insured",
    description: "Full coverage insurance and proper licensing for your peace of mind during the removal process."
  },
  {
    title: "Environmental Compliance",
    description: "Eco-friendly disposal and recycling of accident vehicles following all environmental regulations."
  },
  {
    title: "Experienced Team",
    description: "Professional staff with years of experience in handling accident-damaged vehicles of all types."
  }
];

const vehicleTypes = [
  {
    type: "Collision Damaged",
    description: "Vehicles damaged in collisions, regardless of the severity of the damage."
  },
  {
    type: "Written-Off Vehicles",
    description: "Cars that have been declared a total loss by insurance companies."
  },
  {
    type: "Fire Damaged",
    description: "Vehicles affected by fire damage, whether partial or complete."
  },
  {
    type: "Flood Damaged",
    description: "Cars that have been water damaged due to flooding or other water-related incidents."
  },
  {
    type: "Mechanical Failure",
    description: "Vehicles with severe mechanical damage from accidents or other causes."
  },
  {
    type: "Structural Damage",
    description: "Cars with frame or structural damage from accidents or impacts."
  }
];

export default function AccidentCarRemoval() {
  return (
    <main className="min-h-screen">
      <ServiceHero
        title="Accident Car Removal Perth"
        subtitle="Best Price for Your Accident-Damaged Vehicle"
        description="Turn your accident-damaged car into instant cash. We offer competitive prices with free towing and hassle-free same-day removal service."
      />
      
      <div className="space-y-12">
        <ServiceDescription 
          title="Professional Accident Car Removal Services in Perth"
          description={serviceDescription}
        />
        
        <WhyChooseUs reasons={reasons} />
        
        <AcceptedVehicles
          title="Types of Accident Vehicles We Accept"
          subtitle="We buy all types of accident-damaged vehicles, regardless of condition"
          vehicleTypes={vehicleTypes}
        />
        
        <ProcessSteps />
        <Benefits />
        
        <QuoteForm />
        
        <ServiceAreaInfo />
        
        <ServiceFAQ />
        
        <CallToAction
          title="Get an Instant Quote for Your Accident Vehicle"
          description="Don't let your damaged car take up space. Get cash today with our free removal service!"
          buttonText="Get Free Quote"
          buttonLink="#quote-form"
        />
      </div>
    </main>
  );
}