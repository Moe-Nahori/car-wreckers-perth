import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { mercedesData } from '@/data/cars/mercedes';
import { QuoteForm } from '@/components';
import CarModelPage from '@/components/cars/CarModelPage';

export default function MercedesGLCPage() {
  const modelData = mercedesData.models.glc;

  return (
    <main>
      <EnhancedMakeModelHero
        make="Mercedes-Benz"
        model="GLC"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        averagePrice={modelData.averageValue}
        manufacturingHistory="The Mercedes-Benz GLC, introduced in 2015 as a successor to the GLK, represents Mercedes' entry in the premium compact SUV segment. Built on the C-Class platform, it combines luxury, versatility, and advanced technology in a practical SUV package."
      />

      <CarModelPage
        makeData={mercedesData}
        modelKey="glc"
        heroImageAlt="Mercedes-Benz GLC front view"
        metaDescription="Perth's trusted source for genuine used Mercedes GLC parts. Comprehensive range of engines, electronics, and body components with warranty."
        modelSpecs={{
          engineOptions: ['2.0L Turbo Petrol', '2.0L Turbo Diesel', '3.0L V6', 'AMG variants'],
          transmissionTypes: ['9G-TRONIC', 'AMG SPEEDSHIFT'],
          commonFeatures: [
            'MBUX infotainment system',
            'Air suspension',
            'LED headlights',
            '4MATIC all-wheel drive'
          ],
          popularUpgrades: [
            'AMG styling package',
            'Night package',
            'Off-road engineering package',
            'Premium Plus package components'
          ]
        }}
      />

      <QuoteForm />
    </main>
  );
}