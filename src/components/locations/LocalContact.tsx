import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { companyInfo } from '@/config/company-info'
import PhoneNumber from '@/components/ui/PhoneNumber'

interface LocalContactProps {
  suburb: string
}

export function LocalContact({ suburb }: LocalContactProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contact Our {suburb} Team
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <PhoneNumber 
                    number={companyInfo.phone}
                    className="hover:text-blue-600"
                    location="local-contact"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <Link 
                    href={`mailto:${companyInfo.email}`} 
                    className="hover:text-blue-600"
                  >
                    {companyInfo.email}
                  </Link>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p>Serving {suburb}</p>
                    <p className="text-sm text-gray-600">and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p>Mon - Sun: {companyInfo.openingHours.monday}</p>
                    <p className="text-sm text-gray-600">24/7 online quotes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Get an Instant Quote</h3>
              <p className="mb-6 text-gray-600">
                Tell us about your car and get an instant quote in {suburb}. Free pickup available today!
              </p>
              
              <div className="space-y-4">
                <Link href="/quote" className="w-full">
                  <Button className="w-full bg-[#0051ff] hover:bg-blue-700 text-white py-4">
                    Get Online Quote
                  </Button>
                </Link>
                
                <PhoneNumber 
                  number={companyInfo.phone}
                  className="w-full flex items-center justify-center gap-2 bg-[#22a45d] hover:bg-[#1a8047] text-white py-4 rounded-md transition-colors text-lg font-medium"
                  location="local-quote"
                >
                  <Phone className="w-5 h-5" />
                  {companyInfo.phone}
                </PhoneNumber>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}