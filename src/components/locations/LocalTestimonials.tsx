import { Star } from 'lucide-react'

interface LocalTestimonialsProps {
  suburb: string
  formattedSuburb: string
}

const testimonials = {
  'bellevue': [
    { name: 'John S.', rating: 5, text: 'Quick and professional service in Bellevue. Got a great price for my old Commodore.' },
    { name: 'Sarah M.', rating: 5, text: 'They came to Bellevue within 2 hours of calling. Very happy with the service.' }
  ],
  'midland': [
    { name: 'Mike P.', rating: 5, text: 'Best car wreckers in Midland. Fair price and quick pickup.' },
    { name: 'Emma L.', rating: 5, text: 'Excellent service in Midland area. Very professional team.' }
  ]
} as const

export function LocalTestimonials({ suburb, formattedSuburb }: LocalTestimonialsProps) {
  const defaultTestimonials = [
    {
      name: 'Local Customer',
      rating: 5,
      text: `Excellent service in ${formattedSuburb}. Quick response and great price for my car.`
    },
    {
      name: 'Satisfied Client',
      rating: 5,
      text: `Best car removal service in ${formattedSuburb}. Professional and efficient team.`
    }
  ]

  const localTestimonials = testimonials[suburb as keyof typeof testimonials] || defaultTestimonials

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our {formattedSuburb} Customers Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {localTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
