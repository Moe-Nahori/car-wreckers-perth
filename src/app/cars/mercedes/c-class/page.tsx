import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { mercedesData } from '@/data/cars/mercedes';
import { QuoteForm } from '@/components';
import CarModelPage from '@/components/cars/CarModelPage';

export default function MercedesCClassPage() {
  const modelData = mercedesData.models.cClass;

  return (
    <main>
      <EnhancedMakeModelHero
        make="Mercedes-Benz"
        model="C-Class"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        averagePrice={modelData.averageValue}
        manufacturingHistory="The Mercedes-Benz C-Class is a line of compact executive cars that has been a cornerstone of the Mercedes lineup since 1993. Known for its luxury, advanced technology, and exceptional build quality, the C-Class offers a perfect balance of comfort and performance."
      />

      <CarModelPage
        makeData={mercedesData}
        modelKey="cClass"
        heroImageAlt="Mercedes-Benz C-Class front view"
        metaDescription="Perth's trusted source for genuine used Mercedes C-Class parts. Wide range of engines, transmissions, electronics and body components available with warranty."
        modelSpecs={{
          engineOptions: ['1.6L Turbo', '2.0L Turbo', '3.0L V6', 'AMG variants'],
          transmissionTypes: ['7G-Tronic', '9G-Tronic', 'Manual'],
          commonFeatures: [
            'COMAND infotainment system',
            'LED headlights',
            'AIRMATIC suspension',
            'Driver assistance systems'
          ],
          popularUpgrades: [
            'AMG styling packages',
            'LED lighting upgrades',
            'Sport suspension kits',
            'Performance exhaust systems'
          ]
        }}
      />

      <QuoteForm />
    </main>
  );
}