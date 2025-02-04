import { MapPin } from 'lucide-react';

const areas = [
  'Belmont',
  'Canning Vale',
  'Fremantle',
  'Joondalup',
  'Midland',
  'Morley',
  'Osborne Park',
  'Rockingham',
  'Victoria Park',
  'Wanneroo',
];

export default function ServiceAreaInfo() {
  return (
    <section className="py-12" id="service-area">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">We Service All Perth Areas</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our old car removal service covers the entire Perth metropolitan area, including:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {areas.map((area) => (
            <div 
              key={area}
              className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm"
            >
              <MapPin className="w-4 h-4 text-blue-600 mr-2" />
              <span>{area}</span>
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-gray-600">
          Not listed? Contact us - we likely service your area!
        </p>
      </div>
    </section>
  );
}