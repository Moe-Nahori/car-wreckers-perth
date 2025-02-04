import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Car Parts Dismantling Service Perth | iCar Wreckers',
  description: 'Expert auto parts dismantling service in Perth. Quality tested parts, eco-friendly recycling, and warranty coverage. Get affordable OEM parts for all car makes and models.',
  keywords: 'car parts dismantling, auto parts perth, used car parts, car dismantlers perth, car parts recycling, OEM parts perth',
  openGraph: {
    title: 'Professional Car Parts Dismantling Service Perth | iCar Wreckers',
    description: 'Expert auto parts dismantling service in Perth. Quality tested parts, eco-friendly recycling, and warranty coverage. Get affordable OEM parts for all car makes and models.',
    type: 'website',
    url: 'https://icarwreckerperth.com.au/services/parts-dismantling',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}