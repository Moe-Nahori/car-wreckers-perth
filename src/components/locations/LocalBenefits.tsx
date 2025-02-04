import { ShieldCheck, Truck, DollarSign, Clock, Recycle, Award } from 'lucide-react'

interface LocalBenefitsProps {
  suburb: string
}

export function LocalBenefits({ suburb }: LocalBenefitsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Car Wreckers in {suburb}?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Best Local Prices</h3>
            <p className="text-gray-600">
              Get up to $9,999 for your vehicle in {suburb}. We consistently offer the highest prices in your area.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Clock className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Quick Local Service</h3>
            <p className="text-gray-600">
              Based in {suburb}, we provide same-day pickup within 2-4 hours of your call.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Truck className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Free Towing</h3>
            <p className="text-gray-600">
              Complimentary car removal service throughout {suburb} and neighboring suburbs.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Licensed Operations</h3>
            <p className="text-gray-600">
              Fully licensed and insured car wreckers serving {suburb} with all required permits.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Recycle className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
            <p className="text-gray-600">
              Supporting sustainable practices in {suburb} through responsible car recycling.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Award className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Trusted Local Service</h3>
            <p className="text-gray-600">
              Over 15 years of experience serving {suburb} with 5-star customer ratings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}