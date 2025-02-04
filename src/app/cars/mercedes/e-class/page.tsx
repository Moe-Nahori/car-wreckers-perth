import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { mercedesData } from '@/data/cars/mercedes';
import { QuoteForm } from '@/components';
import CarModelPage from '@/components/cars/CarModelPage';

export default function MercedesEClassPage() {
  const modelData = mercedesData.models.eClass;

  return (
    <main>
      <EnhancedMakeModelHero
        make="Mercedes-Benz"
        model="E-Class"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        averagePrice={modelData.averageValue}
        manufacturingHistory="The Mercedes-Benz E-Class represents the epitome of luxury executive cars since 1953. Known for its exceptional comfort, advanced safety features, and innovative technology, the E-Class has consistently set new standards in the luxury segment."
      />

      <CarModelPage
        makeData={mercedesData}
        modelKey="eClass"
        heroImageAlt="Mercedes-Benz E-Class front view"
        metaDescription="Perth's premium source for genuine used Mercedes E-Class parts. Extensive range of engines, transmissions, electronics and luxury components available with warranty."
        modelSpecs={{
          engineOptions: ['2.0L Turbo', '3.0L Inline-6', '4.0L V8', 'Diesel variants', 'AMG variants'],
          transmissionTypes: ['9G-TRONIC', 'AMG SPEEDSHIFT'],
          commonFeatures: [
            'COMAND/MBUX system',
            'Air suspension',
            'Multi-beam LED headlights',
            'Advanced driver assistance'
          ],
          popularUpgrades: [
            'AMG appearance packages',
            'Premium audio systems',
            'Executive rear seat packages',
            'Advanced lighting packages'
          ]
        }}
      />

      <QuoteForm />
    </main>
  );
}