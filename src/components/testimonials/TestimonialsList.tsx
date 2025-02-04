'use client';

import { useState } from 'react';
import StarRating from '@/components/StarRating';

const services = [
  'Cash for Cars',
  'Car Removal',
  'Scrap Car Removal',
  'Accident Car Removal',
  'Old Car Removal',
  'Commercial Vehicle Removal'
] as const;

const testimonials = [
  {
    name: "Michael Anderson",
    location: "Osborne Park",
    rating: 5,
    date: "January 28, 2024",
    comment: "Fantastic service! Called them about my accident-damaged BMW and they came the same day. Offered a great price and handled all the paperwork professionally. Really impressed with their efficiency!",
    carSold: "BMW 3 Series",
    service: "Accident Car Removal"
  },
  {
    name: "Sarah Cooper",
    location: "Joondalup",
    rating: 4.5,
    date: "January 15, 2024",
    comment: "Really good service overall. They arrived a bit later than scheduled due to traffic but kept me updated. Offered a fair price for my Camry and the team was friendly and professional.",
    carSold: "Toyota Camry",
    service: "Cash for Cars"
  },
  {
    name: "James Patterson",
    location: "Fremantle",
    rating: 5,
    date: "December 28, 2023",
    comment: "Had an old commercial van sitting in my business lot for months. These guys came, assessed it fairly, and removed it within hours. Very professional service!",
    carSold: "Ford Transit Van",
    service: "Commercial Vehicle Removal"
  },
  {
    name: "Emma Wilson",
    location: "Rockingham",
    rating: 4.5,
    date: "December 12, 2023",
    comment: "Good experience overall. The initial quote was slightly adjusted after inspection, but they explained why and it was still a fair price. Quick and efficient removal process.",
    carSold: "Holden Cruze",
    service: "Scrap Car Removal"
  },
  {
    name: "David Chen",
    location: "Cannington",
    rating: 5,
    date: "November 30, 2023",
    comment: "Had a great experience selling my old Mazda. They were honest about the price, arrived on time, and made the process hassle-free. Would definitely recommend!",
    carSold: "Mazda CX-5",
    service: "Car Removal"
  },
  {
    name: "Lisa Thompson",
    location: "Victoria Park",
    rating: 4.5,
    date: "November 15, 2023",
    comment: "Professional service. The quote was reasonable and the pickup was smooth. Only minor thing was I had to follow up about the pickup time, but otherwise great service.",
    carSold: "Hyundai i30",
    service: "Accident Car Removal"
  },
  {
    name: "Robert Walsh",
    location: "Midland",
    rating: 5,
    date: "October 25, 2023",
    comment: "Outstanding service! Got rid of two old cars at once. They offered competitive prices and handled the removal professionally. Very satisfied with the service.",
    carSold: "Toyota Hilux and Ford Falcon",
    service: "Car Removal"
  },
  {
    name: "Sophie Martinez",
    location: "Malaga",
    rating: 4.5,
    date: "October 10, 2023",
    comment: "Very good service for my commercial truck removal. Price was slightly less than initially quoted after inspection, but still fair. Process was efficient and team was professional.",
    carSold: "Isuzu NPR",
    service: "Commercial Vehicle Removal"
  }
];

export default function TestimonialsList() {
  const [selectedService, setSelectedService] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const filteredTestimonials = selectedService 
    ? testimonials.filter(t => t.service === selectedService)
    : testimonials;

  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;

  const handleServiceChange = (service: string) => {
    setIsLoading(true);
    setSelectedService(service);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div className={isLoading ? 'opacity-50 pointer-events-none' : ''}>
      {/* Overall Rating */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-2xl font-semibold mb-2">Customer Satisfaction Rating</h2>
          <div className="flex items-center gap-4">
            <StarRating rating={averageRating} readonly />
            <span className="text-2xl font-bold">{averageRating.toFixed(1)} out of 5</span>
          </div>
          <p className="text-gray-600 mt-2">
            Based on {testimonials.length} verified reviews
          </p>
        </div>
      </div>

      {/* Service Filter */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Filter Reviews by Service</h2>
        <div className="flex flex-wrap gap-3">
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedService === '' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleServiceChange('')}
          >
            All Reviews
          </button>
          {services.map((service) => (
            <button
              key={service}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedService === service 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => handleServiceChange(service)}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {filteredTestimonials.length > 0 ? (
          filteredTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <StarRating rating={testimonial.rating} readonly />
                <span className="text-lg font-semibold text-gray-700">
                  {testimonial.rating.toFixed(1)} out of 5
                </span>
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
          ))
        ) : (
          <div className="col-span-2 text-center py-12 text-gray-500">
            No reviews found for {selectedService}. Be the first to leave a review!
          </div>
        )}
      </div>
    </div>
  );
}