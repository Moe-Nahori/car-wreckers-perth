import { LocalBenefits } from '@/components/locations/LocalBenefits'
import { LocalContact } from '@/components/locations/LocalContact'
import { LocalContent } from '@/components/locations/LocalContent'
import { LocalFAQ } from '@/components/locations/LocalFAQ'
import { LocalTestimonials } from '@/components/locations/LocalTestimonials'
import { NearbySuburbs } from '@/components/locations/NearbySuburbs'
import { notFound } from 'next/navigation'

const validSuburbs = [
  'perth-metro',
  'bellevue',
  'midland',
  'malaga',
  'welshpool',
  'osborne-park',
  'cannington',
  'joondalup',
  'fremantle',
  'rockingham',
  'armadale',
  'morley',
  'bibra-lake',
  'victoria-park',
  'bayswater'
]

interface PageProps {
  params: {
    suburb: string
  }
}

export function generateMetadata({ params }: PageProps) {
  const suburb = params.suburb.replace('-', ' ')
  const formattedSuburb = suburb.charAt(0).toUpperCase() + suburb.slice(1)
  return {
    title: `Car Wreckers ${formattedSuburb} | Best Prices Paid`,
    description: `Get top cash for your old, damaged, or unwanted cars in ${formattedSuburb} and surrounding suburbs. Same day pickup, free towing, and instant quotes. Licensed car wreckers serving all ${formattedSuburb} areas.`,
    openGraph: {
      title: `Car Wreckers ${formattedSuburb} | Up to $9,999 Cash for Cars`,
      description: `Top cash for cars in ${formattedSuburb}. ✓ Free Car Removal ✓ Same Day Service ✓ Best Prices Paid ✓ All Vehicle Types Accepted. Call now for an instant quote!`,
    }
  }
}

export default function LocationPage({ params }: PageProps) {
  if (!validSuburbs.includes(params.suburb)) {
    notFound()
  }

  const suburb = params.suburb.replace('-', ' ')
  const formattedSuburb = suburb.charAt(0).toUpperCase() + suburb.slice(1)
  
  return (
    <main>
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Car Wreckers {formattedSuburb}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Get top dollar for your old, damaged, or unwanted cars in {formattedSuburb}. 
            We offer same-day pickup and instant cash payments.
          </p>
        </div>
      </section>

      <LocalBenefits suburb={formattedSuburb} />
      <LocalTestimonials suburb={params.suburb} formattedSuburb={formattedSuburb} />
      <LocalFAQ suburb={formattedSuburb} />
      <LocalContent suburb={formattedSuburb} />
      <NearbySuburbs suburb={formattedSuburb} />
      <LocalContact suburb={formattedSuburb} />
    </main>
  )
}