import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { mercedesData } from '@/data/cars/mercedes';
import { QuoteForm } from '@/components';
import CarModelPage from '@/components/cars/CarModelPage';

export default function MercedesGLEPage() {
  const modelData = mercedesData.models.gle;

  return (
    <main>
      <EnhancedMakeModelHero
        make="Mercedes-Benz"
        model="GLE"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        averagePrice={modelData.averageValue}
        manufacturingHistory="The Mercedes-Benz GLE, formerly known as the M-Class, pioneered the luxury SUV segment when launched in 1997. Rebranded as GLE in 2015, it continues to set standards in luxury, technology, and capability in the premium SUV market."
      />

      <CarModelPage
        makeData={mercedesData}
        modelKey="gle"
        heroImageAlt="Mercedes-Benz GLE front view"
        metaDescription="Perth's premium supplier of genuine used Mercedes GLE parts. Wide selection of engines, electronics, and luxury components with warranty."
        modelSpecs={{
          engineOptions: ['2.0L Turbo', '3.0L Inline-6', '4.0L V8', 'Diesel variants', 'AMG variants'],
          transmissionTypes: ['9G-TRONIC', 'AMG SPEEDSHIFT TCT'],
          commonFeatures: [
            'MBUX infotainment system',
            'E-ACTIVE BODY CONTROL',
            'Multibeam LED headlights',
            'Advanced driver assistance'
          ],
          popularUpgrades: [
            'AMG Line exterior',
            'Premium Plus package components',
            'Off-road package',
            'Rear entertainment system'
          ]
        }}
      />

      <QuoteForm />
    </main>
  );
}