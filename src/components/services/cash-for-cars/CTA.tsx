import Link from 'next/link';
import { companyInfo } from '@/config/company-info';

export function CTA() {
  return (
    <section className="bg-primary text-white rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Cash for Your Car?</h2>
      <p className="text-xl mb-8">
        Get an instant quote and turn your unwanted vehicle into cash today! 
        We service ALL Perth suburbs and offer the best rates in WA.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/quote"
          className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-bold hover:bg-primary-foreground transition"
        >
          Get Instant Quote
        </Link>
        <a 
          href={`tel:${companyInfo.phone}`}
          className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-green-600 transition"
        >
          Call {companyInfo.phone}
        </a>
      </div>
    </section>
  );
}