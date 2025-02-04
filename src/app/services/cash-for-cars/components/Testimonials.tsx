import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Thompson",
      location: "Joondalup",
      rating: 5,
      text: "Fantastic service! They offered me the best price for my old Holden and picked it up the same day. Very professional team.",
    },
    {
      name: "Sarah Chen",
      location: "Morley",
      rating: 5,
      text: "Quick and easy process. The team was very helpful and offered a great price for my damaged car. Would definitely recommend!",
    },
    {
      name: "David Wilson",
      location: "Fremantle",
      rating: 5,
      text: "I was impressed with their prompt service and fair pricing. The whole process was completed within hours.",
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what recent customers have to say about our service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}