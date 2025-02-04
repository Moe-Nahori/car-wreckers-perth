import { MapPin, Clock, Check } from 'lucide-react'

interface ServiceAreaProps {
  suburb: string
  formattedSuburb: string
  mapUrl: string
  coverageAreas: string[]
}

const defaultCoverage = [
  'High Wycombe',
  'Maida Vale',
  'Kalamunda',
  'Forrestfield',
  'Midland',
  'Swan View'
]

export function ServiceArea({ suburb, formattedSuburb, coverageAreas = defaultCoverage }: ServiceAreaProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Car+Wreckers+${formattedSuburb}+Perth+WA`}
            />
          </div>

          {/* Coverage Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Our Service Area in {formattedSuburb}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quick Response Time</h3>
                  <p className="text-gray-600">We offer same-day car removal services in {formattedSuburb} and surrounding areas, usually within 2-4 hours of your call.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Areas We Cover Near {formattedSuburb}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {coverageAreas.map((area) => (
                      <div key={area} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800">
                  <strong>Note:</strong> We service all areas within a 50km radius of {formattedSuburb}. Contact us for specific location inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
