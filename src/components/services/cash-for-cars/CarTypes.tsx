import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function CarTypes() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">We Buy All Types of Vehicles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <Image
              src="/images/damaged-cars.jpg"
              alt="We buy damaged cars in Perth"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Damaged Cars</h3>
            <p>Whether your car has been in an accident, has mechanical issues, or body damage - we'll make you a fair offer!</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Image
              src="/images/old-cars.jpg"
              alt="We buy old cars in Perth"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Old Cars</h3>
            <p>Got an old car taking up space? We'll buy it! Any age, any condition - get cash for your old vehicle today.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Image
              src="/images/scrap-cars.jpg"
              alt="We buy scrap cars in Perth"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Scrap Cars</h3>
            <p>Even if your car is completely broken down, we'll still buy it! Get paid for your end-of-life vehicle.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}