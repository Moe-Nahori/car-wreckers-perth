import { Card } from "@/components/ui/card";
import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  const areas = [
    {
      region: "North of the River",
      suburbs: [
        "Joondalup",
        "Wanneroo",
        "Scarborough",
        "Morley",
        "Dianella",
        "Mirrabooka"
      ]
    },
    {
      region: "South of the River",
      suburbs: [
        "Fremantle",
        "Rockingham",
        "Mandurah",
        "Cockburn",
        "Canning Vale",
        "Armadale"
      ]
    },
    {
      region: "Eastern Suburbs",
      suburbs: [
        "Midland",
        "Bellevue",
        "Guildford",
        "Kalamunda",
        "Forrestfield",
        "High Wycombe"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            We Buy Cars Across All Perth Areas
          </h2>
          <p className="text-lg text-gray-600">
            Our cash for cars service covers the entire Perth metropolitan area. Free car removal in all suburbs!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg">{area.region}</h3>
              </div>
              <ul className="space-y-2">
                {area.suburbs.map((suburb) => (
                  <li key={suburb} className="text-gray-600">
                    {suburb}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600">
          Don't see your suburb listed? Don't worry - we service ALL Perth metropolitan areas!
        </div>
      </div>
    </section>
  );
}