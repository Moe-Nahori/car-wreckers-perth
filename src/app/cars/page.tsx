import Link from 'next/link';
import { QuoteForm } from '@/components';

const carMakes = {
  Toyota: {
    description: 'Most popular car brand in Australia, known for reliability',
    models: ['Corolla', 'Camry', 'HiLux', 'RAV4', 'LandCruiser']
  },
  Holden: {
    description: 'Classic Australian brand with a rich heritage',
    models: ['Commodore', 'Cruze', 'Colorado', 'Captiva', 'Astra']
  },
  Ford: {
    description: 'Strong presence in both passenger and commercial vehicles',
    models: ['Falcon', 'Ranger', 'Territory', 'Focus', 'Fiesta']
  },
  Mazda: {
    description: 'Popular for reliability and modern design',
    models: ['Mazda3', 'CX-5', 'BT-50', 'Mazda2', 'CX-3']
  },
  Hyundai: {
    description: 'Known for value and modern features',
    models: ['i30', 'Tucson', 'Santa Fe', 'Accent', 'Elantra']
  }
};

export default function CarMakesPage() {
  return (
    <main>
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Car Makes We Buy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            We Buy All Makes and Models - Get Top Dollar for Your Car
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(carMakes).map(([make, info]) => (
            <div key={make} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">
                <Link href={`/cars/${make.toLowerCase()}`} className="hover:text-blue-600">
                  {make}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{info.description}</p>
              <h3 className="font-semibold mb-2">Popular Models:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {info.models.map((model) => (
                  <li key={model}>
                    <Link
                      href={`/cars/${make.toLowerCase()}/${model.toLowerCase()}`}
                      className="text-blue-600 hover:underline"
                    >
                      {model}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <QuoteForm />
    </main>
  );
}