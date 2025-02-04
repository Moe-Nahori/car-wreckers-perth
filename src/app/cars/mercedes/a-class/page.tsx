import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { mercedesData } from '@/data/cars/mercedes';
import { QuoteForm } from '@/components';
import CarModelPage from '@/components/cars/CarModelPage';

export default function MercedesAClassPage() {
  const modelData = mercedesData.models.aClass;

  return (
    <main>
      <EnhancedMakeModelHero
        make="Mercedes-Benz"
        model="A-Class"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        averagePrice={modelData.averageValue}
        manufacturingHistory="The Mercedes-Benz A-Class revolutionized the compact luxury segment when it was introduced in 1997. The modern A-Class, particularly since its 2013 redesign, combines premium quality with sporty dynamics and cutting-edge technology in a compact package."
      />

      <CarModelPage
        makeData={mercedesData}
        modelKey="aClass"
        heroImageAlt="Mercedes-Benz A-Class front view"
        metaDescription="Perth's leading supplier of genuine used Mercedes A-Class parts. Full range of engines, transmissions, electronics and body components with warranty."
        modelSpecs={{
          engineOptions: ['1.3L Turbo', '2.0L Turbo', 'AMG variants'],
          transmissionTypes: ['7G-DCT', '8G-DCT', 'Manual'],
          commonFeatures: [
            'MBUX infotainment system',
            'LED headlights',
            'Sport suspension',
            'Advanced safety features'
          ],
          popularUpgrades: [
            'AMG Line packages',
            'Night package',
            'Premium audio systems',
            'Aerodynamics package'
          ]
        }}
      />

      <QuoteForm />
    </main>
  );
}