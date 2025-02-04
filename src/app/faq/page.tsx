import { Metadata } from 'next'
import FAQContent from './FAQContent'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | iCar Wreckers Perth',
  description: 'Find answers to common questions about car removal, pricing, and our services at iCar Wreckers Perth.',
}

export default function FAQPage() {
  return <FAQContent />;
}