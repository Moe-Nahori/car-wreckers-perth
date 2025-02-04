'use client';

import { useState } from 'react';
import ServiceFilter from './ServiceFilter';
import ReviewForm from './ReviewForm';
import StarRating from './StarRating';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  carSold: string;
  service: string;
}

interface TestimonialsContainerProps {
  services: string[];
  testimonials: Testimonial[];
}

export default function TestimonialsContainer({ services, testimonials }: TestimonialsContainerProps) {
  const [selectedService, setSelectedService] = useState('');

  const filteredTestimonials = selectedService 
    ? testimonials.filter(t => t.service === selectedService)
    : testimonials;

  return (
    <>
      <ServiceFilter 
        services={services}
        selectedService={selectedService}
        onServiceChange={setSelectedService}
      />

      <ReviewForm services={services} />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {filteredTestimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
            <div className="mb-4">
              <StarRating rating={testimonial.rating} readonly />
            </div>
            <p className="text-gray-700 mb-4">{testimonial.comment}</p>
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Vehicle:</span> {testimonial.carSold}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Service Used:</span> {testimonial.service}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}