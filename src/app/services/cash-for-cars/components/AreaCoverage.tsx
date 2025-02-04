import { MapPin } from 'lucide-react';

export default function AreaCoverage() {
  const regions = [
    {
      name: "Northern Suburbs",
      suburbs: [
        "Joondalup",
        "Wanneroo",
        "Hillarys",
        "Scarborough",
        "Dianella",
        "Morley"
      ]
    },
    {
      name: "Southern Suburbs",
      suburbs: [
        "Fremantle",
        "Rockingham",
        "Mandurah",
        "Success",
        "Cockburn",
        "Bibra Lake"
      ]
    },
    {
      name: "Eastern Suburbs",
      suburbs: [
        "Midland",
        "Guildford",
        "Bellevue",
        "Mundaring",
        "Kalamunda",
        "High Wycombe"
      ]
    },
    {
      name: "Western Suburbs",
      suburbs: [
        "Cottesloe",
        "Claremont",
        "Nedlands",
        "Subiaco",
        "City Beach",
        "Mosman Park"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Cash for Cars Across Perth
          </h2>
          <p className="text-lg text-gray-600">
            We offer our car buying service throughout the Perth metropolitan area with free car removal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <div key={region.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg">{region.name}</h3>
              </div>
              <ul className="space-y-2">
                {region.suburbs.map((suburb) => (
                  <li key={suburb} className="text-gray-600">
                    {suburb}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Don't see your suburb listed? No problem! We service ALL areas in Perth metropolitan region.
          </p>
        </div>
      </div>
    </section>
  );
}