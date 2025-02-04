"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Testimonial } from "@/types/testimonial";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    location: "Bellevue, Perth",
    rating: 5,
    review: "Excellent service! They picked up my old Holden Commodore within hours and paid a fair price. Very professional team.",
    carModel: "Holden Commodore",
    service: "Car Removal",
    date: "2024-01-15",
    verified: true,
  },
  {
    id: "2",
    name: "Sarah Wilson",
    location: "Midland",
    rating: 5,
    review: "Quick and hassle-free process. Got more than I expected for my damaged Toyota Corolla.",
    carModel: "Toyota Corolla",
    service: "Cash for Cars",
    date: "2024-01-10",
    verified: true,
  },
  {
    id: "3",
    name: "Mike Johnson",
    location: "Osborne Park",
    rating: 4,
    review: "Great experience overall. They were on time and very efficient with the removal.",
    carModel: "Ford Ranger",
    service: "Scrap Car Removal",
    date: "2024-01-05",
    verified: true,
  },
  {
    id: "4",
    name: "Emma Brown",
    location: "Joondalup",
    rating: 5,
    review: "Fantastic service! The team was professional and offered a great price for my accident-damaged car.",
    carModel: "Mazda3",
    service: "Accident Car Removal",
    date: "2024-01-02",
    verified: true,
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="h-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
              <StarRating rating={testimonial.rating} />
            </div>
            
            <p className="mb-4">{testimonial.review}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {testimonial.carModel && (
                <Badge className="bg-blue-600 text-white hover:bg-blue-700">{testimonial.carModel}</Badge>
              )}
              {testimonial.service && (
                <Badge variant="outline">{testimonial.service}</Badge>
              )}
            </div>
            
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <time className="text-sm text-muted-foreground">
                {new Date(testimonial.date).toLocaleDateString()}
              </time>
              {testimonial.verified && (
                <Badge className="text-xs bg-blue-600 text-white hover:bg-blue-700">Verified Customer</Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}