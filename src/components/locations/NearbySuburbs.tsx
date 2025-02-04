import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NearbySuburbsProps {
  suburb: string
}

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

const nearbySuburbsMap: Record<string, string[]> = {
  'morley': [
    'Bayswater', 'Bedford', 'Embleton', 'Beechboro', 'Dianella',
    'Noranda', 'Mirrabooka', 'Malaga', 'Westminster', 'Balga',
    'Yokine', 'Inglewood', 'Mount Lawley', 'Maylands', 'Nollamara'
  ],
  'perth-metro': [
    'Victoria Park', 'Bayswater', 'Morley', 'Osborne Park', 'Bellevue',
    'Perth CBD', 'Northbridge', 'East Perth', 'West Perth', 'South Perth',
    'Mount Lawley', 'Highgate', 'Leederville', 'Subiaco', 'Nedlands'
  ],
  'bellevue': [
    'Midland', 'Helena Valley', 'Koongamia', 'Swan View', 'Stratton', 
    'Middle Swan', 'Jane Brook', 'Red Hill', 'Hovea', 'Darlington',
    'Glen Forrest', 'Mundaring', 'Mahogany Creek', 'Parkerville'
  ],
  'midland': [
    'Bellevue', 'Woodbridge', 'Viveash', 'Middle Swan', 'Hazelmere', 
    'Guildford', 'South Guildford', 'Helena Valley', 'Koongamia',
    'Swan View', 'Stratton', 'Jane Brook', 'Caversham', 'West Swan'
  ],
  'malaga': [
    'Morley', 'Dianella', 'Beechboro', 'Ballajura', 'Alexander Heights',
    'Mirrabooka', 'Westminster', 'Balga', 'Bennett Springs', 'Landsdale',
    'Cullacabardee', 'Noranda', 'Dianella', 'Whiteman'
  ],
  'welshpool': [
    'Victoria Park', 'Cannington', 'East Cannington', 'Queens Park', 'Kewdale',
    'Belmont', 'Carlisle', 'East Victoria Park', 'Bentley', 'St James',
    'Wilson', 'Rivervale', 'Cloverdale', 'Lathlain', 'Burswood'
  ],
  'osborne-park': [
    'Tuart Hill', 'Joondanna', 'Yokine', 'Balcatta', 'Stirling',
    'Karrinyup', 'Innaloo', 'Gwelup', 'Hamersley', 'Warwick',
    'Carine', 'North Beach', 'Trigg', 'Scarborough', 'Doubleview'
  ],
  'cannington': [
    'Welshpool', 'East Cannington', 'Queens Park', 'Wilson', 'Bentley',
    'Ferndale', 'Lynwood', 'Langford', 'Beckenham', 'Kenwick',
    'Maddington', 'Orange Grove', 'Martin', 'Thornlie'
  ],
  'joondalup': [
    'Edgewater', 'Heathridge', 'Connolly', 'Ocean Reef', 'Mullaloo',
    'Beldon', 'Craigie', 'Kallaroo', 'Hillarys', 'Padbury',
    'Kinross', 'Currambine', 'Burns Beach', 'Iluka', 'Woodvale'
  ],
  'fremantle': [
    'North Fremantle', 'East Fremantle', 'South Fremantle', 'Beaconsfield',
    'White Gum Valley', 'Hamilton Hill', 'Spearwood', 'Hilton',
    'O\'Connor', 'Palmyra', 'Bicton', 'Attadale', 'Melville', 'Willagee'
  ],
  'rockingham': [
    'Safety Bay', 'Shoalwater', 'Cooloongup', 'Waikiki', 'Port Kennedy',
    'Secret Harbour', 'Baldivis', 'East Rockingham', 'Hillman', 'Peron',
    'Garden Island', 'Warnbro', 'Golden Bay', 'Singleton', 'Karnup'
  ],
  'armadale': [
    'Kelmscott', 'Seville Grove', 'Camillo', 'Haynes', 'Hilbert',
    'Brookdale', 'Wungong', 'Champion Lakes', 'Forrestdale', 'Harrisdale',
    'Piara Waters', 'Roleystone', 'Mount Nasura', 'Mount Richon', 'Bedfordale'
  ],
  'bibra-lake': [
    'North Lake', 'South Lake', 'Yangebup', 'Coolbellup', 'Hamilton Hill',
    'Spearwood', 'Cockburn Central', 'Success', 'Atwell', 'Beeliar',
    'Munster', 'Henderson', 'Wattleup', 'Hope Valley', 'Naval Base'
  ],
  'victoria-park': [
    'East Victoria Park', 'St James', 'Bentley', 'Carlisle', 'Lathlain',
    'Welshpool', 'Burswood', 'Rivervale', 'Kewdale', 'Queens Park',
    'Wilson', 'Cannington', 'East Cannington', 'Cloverdale', 'Como'
  ],
  'bayswater': [
    'Morley', 'Bedford', 'Embleton', 'Maylands', 'Mount Lawley',
    'Inglewood', 'Bassendean', 'Eden Hill', 'Ashfield', 'Success Hill',
    'Perth Airport', 'Ascot', 'Redcliffe', 'Belmont', 'Rivervale'
  ]
}

export function NearbySuburbs({ suburb }: NearbySuburbsProps) {
  const key = suburb.toLowerCase().replace(' ', '-')
  const nearbySuburbs = nearbySuburbsMap[key] || []

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Car Wreckers Also Serving Near {suburb}
        </h2>
        <div className="prose max-w-none">
          <p className="text-lg text-center mb-8">
            Our car removal service extends beyond {suburb} to serve the following nearby suburbs with the same great service and instant cash payments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {nearbySuburbs.map((nearbySuburb) => {
              const suburbKey = nearbySuburb.toLowerCase().replace(' ', '-')
              const hasPage = validSuburbs.includes(suburbKey)

              return (
                <div key={nearbySuburb} className="bg-white p-4 rounded-lg shadow-sm">
                  {hasPage ? (
                    <Link 
                      href={`/locations/${suburbKey}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline block text-center"
                    >
                      Car Wreckers {nearbySuburb}
                    </Link>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-center font-medium">{nearbySuburb}</p>
                      <a 
                        href="tel:0412345678"
                        className="flex items-center justify-center gap-2 text-sm text-green-600 hover:text-green-700"
                      >
                        <Phone className="w-4 h-4" />
                        Get Quote for {nearbySuburb}
                      </a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">
              Don't see your suburb listed? Don't worry - we serve the entire Perth metropolitan area.
            </p>
            <a href="tel:0412345678">
              <Button className="bg-green-600 hover:bg-green-700">
                <Phone className="w-4 h-4 mr-2" />
                Call Now for a Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}