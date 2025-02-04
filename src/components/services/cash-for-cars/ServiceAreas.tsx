import Link from 'next/link';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { serviceAreas } from '@/data/service-areas';

export function ServiceAreas() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">We Service All Perth Suburbs</h2>
      <p className="text-center text-lg mb-8">
        From Joondalup to Rockingham, and from Fremantle to Midland - we cover the entire Perth metropolitan area. 
        Our service extends to ALL suburbs in Perth, ensuring you get the best cash for cars service no matter where you are.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Northern Suburbs */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-xl mb-4">Northern Suburbs</h3>
            <ul className="space-y-2">
              {serviceAreas.north.map(suburb => (
                <li key={suburb} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <Link href={`/locations/${suburb.toLowerCase()}`} className="hover:text-primary">
                    {suburb}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Southern Suburbs */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-xl mb-4">Southern Suburbs</h3>
            <ul className="space-y-2">
              {serviceAreas.south.map(suburb => (
                <li key={suburb} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <Link href={`/locations/${suburb.toLowerCase()}`} className="hover:text-primary">
                    {suburb}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Eastern Suburbs */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-xl mb-4">Eastern Suburbs</h3>
            <ul className="space-y-2">
              {serviceAreas.east.map(suburb => (
                <li key={suburb} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <Link href={`/locations/${suburb.toLowerCase()}`} className="hover:text-primary">
                    {suburb}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mt-8">
        <p className="text-center text-lg font-medium text-blue-800">
          Don't see your suburb listed? No worries! We service ALL suburbs in the Perth metropolitan area. 
          Contact us for immediate assistance - we'll come to you anywhere in Perth!
        </p>
      </div>
    </section>
  );
}