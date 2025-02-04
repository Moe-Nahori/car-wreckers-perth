import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import { Clock, MapPin, Truck, DollarSign, Shield, Car, Check, Star } from 'lucide-react';
import StickyCallButton from '@/components/StickyCallButton';
import { companyInfo } from '@/config/company-info';

export const metadata = generateMetadata({
  title: 'Free Car Removal Perth | Same Day Collection | Best Cash Rates',
  description: 'Perth\'s leading car removal service. Free towing, same-day collection, and instant cash payment. We remove any car in any condition across all Perth suburbs.',
  path: '/services/car-removal',
});

const faqs = [
  {
    question: "How does your car removal service work?",
    answer: "Our process is simple: contact us with your car details, get an instant quote, schedule a pickup time that suits you, and we'll come to your location to remove your car and pay you cash on the spot."
  },
  {
    question: "Is your car removal service really free?",
    answer: "Yes, our car removal service is completely free across the Perth metropolitan area. We handle all towing costs and provide instant cash payment for your vehicle."
  },
  {
    question: "What types of vehicles do you remove?",
    answer: "We remove all types of vehicles including cars, vans, utes, SUVs, 4x4s, and trucks. We accept vehicles in any condition - damaged, old, scrap, or non-running."
  },
  {
    question: "How quickly can you remove my car?",
    answer: "We offer same-day car removal service across Perth. In most cases, we can remove your car within hours of accepting our quote."
  },
  {
    question: "Do you remove accident-damaged cars?",
    answer: "Yes, we remove accident-damaged vehicles. Whether your car has minor damage or is a total write-off, we'll provide a fair quote and free removal."
  },
  {
    question: "What documents do I need?",
    answer: "You'll need proof of ownership (registration papers or similar) and photo ID. We'll help with all the paperwork during collection."
  }
];

const testimonials = [
  {
    name: "David Wilson",
    suburb: "Midland",
    text: "Excellent service! They removed my old Holden the same day and paid a great price. Very professional team.",
    rating: 5
  },
  {
    name: "Lisa Chen",
    suburb: "Osborne Park",
    text: "Quick and easy process. They took care of everything including the paperwork. Highly recommended!",
    rating: 5
  }
];

const removalProcess = [
  {
    step: 1,
    title: "Contact Us",
    description: "Call us or fill out our online form with your car details"
  },
  {
    step: 2,
    title: "Get Quote",
    description: "Receive an instant quote based on your car's details"
  },
  {
    step: 3,
    title: "Schedule Pickup",
    description: "Choose a convenient time for free car removal"
  },
  {
    step: 4,
    title: "Get Paid",
    description: "Get cash payment on the spot when we collect your car"
  }
];

const vehicleTypes = [
  {
    category: "Popular Makes",
    items: ["Toyota", "Holden", "Ford", "Mazda", "Hyundai", "Nissan", "Honda", "Mitsubishi"]
  },
  {
    category: "Vehicle Types",
    items: ["Sedans", "SUVs", "Utes", "Vans", "4x4s", "Trucks", "Commercial", "Luxury Cars"]
  },
  {
    category: "Conditions",
    items: ["Used", "Damaged", "Accident", "Non-running", "Old", "Scrap", "Written-off", "Fire/Flood"]
  }
];

export default function CarRemovalPage() {
  const serviceSchema = {
    '@type': 'Service',
    name: 'Car Removal Perth',
    provider: {
      '@type': 'LocalBusiness',
      name: companyInfo.name,
      telephone: companyInfo.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Perth',
        addressRegion: 'WA',
        addressCountry: 'AU'
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'Perth',
      '@id': 'https://en.wikipedia.org/wiki/Perth'
    },
    description: 'Professional car removal service in Perth with free towing and same-day collection',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLd 
        type="Service" 
        data={serviceSchema} 
        additionalSchemas={[faqSchema]} 
      />
      <StickyCallButton />

      {/* Hero Section */}
      <header className="hero-gradient min-h-[80vh] text-white">
        <div className="container mx-auto px-4 py-12">
          <nav className="mb-8">
            <a 
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-lg font-medium backdrop-blur-sm transition"
            >
              📞 Call Now: {companyInfo.phone}
            </a>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Free Car Removal Perth
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-blue-100">
              Same Day Collection & Instant Cash Payment
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href={`tel:${companyInfo.phone}`}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-50 transition"
              >
                {companyInfo.phone}
              </a>
              <Link
                href="/quote"
                className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg text-lg font-bold transition"
              >
                Get Free Quote
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <Clock className="w-6 h-6" />
                <span className="text-lg">Same Day Service</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <Truck className="w-6 h-6" />
                <span className="text-lg">Free Towing</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <DollarSign className="w-6 h-6" />
                <span className="text-lg">Instant Payment</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">15k+</div>
                <div className="text-blue-100">Cars Removed</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">4.9★</div>
                <div className="text-blue-100">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Vehicles We Remove Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Vehicles We Remove</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vehicleTypes.map((type) => (
              <Card key={type.category}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4">{type.category}</h3>
                  <ul className="space-y-2">
                    {type.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-secondary/10 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How Our Car Removal Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {removalProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.suburb}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Remove Your Car?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get a free quote and same-day car removal service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-bold hover:bg-primary-foreground transition"
            >
              Get Free Quote
            </Link>
            <a 
              href={`tel:${companyInfo.phone}`}
              className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-green-600 transition"
            >
              Call Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
}