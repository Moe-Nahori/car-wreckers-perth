import { MapPin, DollarSign, Clock, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  suburb: string
  formattedSuburb: string
}

export function HeroSection({ suburb, formattedSuburb }: HeroSectionProps) {
  return (
    <section className="relative py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Car Wreckers {formattedSuburb}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Get Top Cash for Your Unwanted Cars in {formattedSuburb}. Free Same-Day Pickup!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Cash Rates</h3>
              <p className="text-blue-100">
                Up to $9,999 for your car - we beat any written quote in {formattedSuburb}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Same Day Service</h3>
              <p className="text-blue-100">
                Free pickup within 2-4 hours anywhere in {formattedSuburb}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quote" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                Get Instant Quote
              </Button>
            </Link>
            <Link href="tel:0412345678" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
