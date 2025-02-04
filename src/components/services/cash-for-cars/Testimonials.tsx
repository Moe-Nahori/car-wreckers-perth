import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
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
              <div className="text-sm text-primary mt-1">{testimonial.carSold}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}