import React from 'react';
import { Truck, Car, DollarSign, Recycle } from 'lucide-react';
import Link from 'next/link';

const ServiceCard = ({ title, description, icon: Icon, href }: { 
  title: string; 
  description: string; 
  icon: any;
  href: string;
}) => (
  <Link href={href}>
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const ServicesPage = () => {
  const services = [
    {
      title: "Scrap Car Removal",
      description: "Get top dollar for your old, damaged, or unwanted vehicles. Free pickup and instant cash payment.",
      icon: Car,
      href: "/services/scrap-car-removal"
    },
    {
      title: "Accident Car Removal",
      description: "We buy accident-damaged vehicles of any condition. Quick removal and fair pricing guaranteed.",
      icon: Truck,
      href: "/services/accident-car-removal"
    },
    {
      title: "Old Car Removal",
      description: "Turn your old car into instant cash. We handle all the paperwork and provide same-day removal.",
      icon: DollarSign,
      href: "/services/old-car-removal"
    },
    {
      title: "Commercial Vehicle Removal",
      description: "Specialized in removing trucks, vans, and fleet vehicles. Competitive rates for businesses.",
      icon: Recycle,
      href: "/services/commercial-vehicle-removal"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Car Removal Services in Perth</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get top cash for your unwanted vehicles with our professional and reliable car removal services. 
          Free towing, instant payment, and same-day service available.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      {/* Service Area Map */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Service Areas</h2>
        <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27013.70051572146!2d115.97840688894957!3d-31.931510726471952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32b0c0b6f82b7b%3A0x504f0b535df4b50!2sBellevue%20WA%206056!5e0!3m2!1sen!2sau!4v1706157433416!5m2!1sen!2sau"
            className="w-full h-[400px] rounded-lg"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Simple Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-600">Call us or fill out our quick quote form with your vehicle details</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Get Your Quote</h3>
            <p className="text-gray-600">Receive an instant cash offer based on your car's condition</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
            <p className="text-gray-600">We pick up your car and pay you cash on the spot</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Car?</h2>
        <p className="text-xl text-gray-600 mb-8">Get a free quote now and turn your unwanted vehicle into cash today!</p>
        <div className="space-x-4">
          <Link href="/quote" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Instant Quote
          </Link>
          <a href="tel:0412345678" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;