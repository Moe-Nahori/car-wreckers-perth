import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Great service! They gave me a fair price for my old car and picked it up the same day. Highly recommend!",
      author: "John Smith",
      location: "Perth, WA",
    },
    {
      text: "Professional team, quick response and best price offered compared to other wreckers. Very satisfied!",
      author: "Sarah Wilson",
      location: "Fremantle, WA",
    },
    {
      text: "Excellent experience! They made selling my damaged car so easy. Same day pickup and payment as promised.",
      author: "Mike Johnson",
      location: "Joondalup, WA",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="font-bold">{testimonial.author}</div>
              <div className="text-gray-500">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}