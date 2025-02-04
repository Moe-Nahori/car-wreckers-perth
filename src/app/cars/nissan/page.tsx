import CarMakePage from '@/components/cars/CarMakePage';
import { nissanData } from '@/data/cars/nissan';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nissan Wreckers Perth | Cash for Nissan Cars',
  description: 'Top cash for all Nissan models in Perth. We buy Nissan vehicles in any condition. Free quote and same-day removal service available.',
};

export default function NissanPage() {
  return (
    <CarMakePage
      makeData={nissanData}
      heroImageAlt="Nissan models we buy in Perth"
      metaDescription="We are Perth's leading Nissan wrecking specialists, offering top cash prices for all Nissan models regardless of their condition. Free quotes and same-day pickup available."
    />
  );
}