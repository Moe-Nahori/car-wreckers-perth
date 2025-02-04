"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState } from "react";
import { useAsync } from "@/hooks/use-async";
import LoadingSpinner from "@/components/ui/loading-spinner";
import ErrorMessage from "@/components/ui/error-message";

export function TestimonialForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const { execute: submitTestimonial, loading: isSubmitting, error } = useAsync(async (formData: FormData) => {
    const response = await fetch('/api/testimonials', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to submit testimonial');
    }

    return response.json();
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rating) {
      alert('Please select a rating');
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append('rating', rating.toString());

    try {
      await submitTestimonial(formData);
      e.currentTarget.reset();
      setRating(0);
      alert('Thank you for your review!');
    } catch (error) {
      // Error is handled by useAsync hook
      console.error('Testimonial submission error:', error);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        {error && (
          <ErrorMessage 
            message={error}
            className="mb-6"
          />
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input 
                id="name" 
                name="name"
                placeholder="Your name" 
                required 
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">
                Suburb
              </label>
              <Input 
                id="location" 
                name="location"
                placeholder="Your suburb in Perth" 
                required 
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="carModel" className="text-sm font-medium">
                Car Model (Optional)
              </label>
              <Input 
                id="carModel" 
                name="carModel"
                placeholder="e.g. Toyota Camry 2015" 
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                Service Used
              </label>
              <Input 
                id="service" 
                name="service"
                placeholder="e.g. Car Removal" 
                required 
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className="focus:outline-none disabled:opacity-50"
                  onMouseEnter={() => setHoveredRating(value)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(value)}
                  disabled={isSubmitting}
                  aria-label={`Rate ${value} stars`}
                >
                  <Star
                    className={`h-6 w-6 transition-colors ${
                      value <= (hoveredRating || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="review" className="text-sm font-medium">
              Your Review
            </label>
            <Textarea
              id="review"
              name="review"
              placeholder="Share your experience with our service"
              required
              className="min-h-[100px]"
              disabled={isSubmitting}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <LoadingSpinner size="sm" />
                Submitting...
              </span>
            ) : (
              'Submit Review'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}