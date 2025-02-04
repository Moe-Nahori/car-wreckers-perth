import { Card, CardContent } from '@/components/ui/card';
import { priceRanges } from '@/data/price-ranges';

export function PriceGuide() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Car Price Guide</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceRanges.map((range) => (
          <Card key={range.condition}>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">{range.condition}</h3>
              <p className="text-2xl font-bold text-green-600">{range.range}</p>
              <p className="text-muted-foreground mt-2">{range.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-muted-foreground mt-4">
        * Prices are indicative only. Get an accurate quote for your specific vehicle.
      </p>
    </section>
  );
}