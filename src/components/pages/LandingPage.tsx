import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <header className="relative bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">
              Car Wreckers Perth
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Perth's most trusted car removal and wrecking service. 
              Get top cash for your unwanted vehicles today!
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/quote"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Car Removal Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                {/* Icon placeholder - you can add an icon library later */}
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Free Car Removal</h3>
              <p className="text-gray-600">
                We offer free car removal services across the Perth metropolitan area. 
                Same-day pickup available!
              </p>
            </div>

            {/* Used Parts Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quality Used Parts</h3>
              <p className="text-gray-600">
                Wide range of quality used car parts with warranty. 
                All parts tested and guaranteed.
              </p>
            </div>

            {/* Best Prices Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Best Prices</h3>
              <p className="text-gray-600">
                Get top dollar for your unwanted vehicles. 
                Instant quotes and immediate payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Car?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get an instant quote for your vehicle today
          </p>
          <Link
            href="/quote"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Us</h2>
            <p className="text-xl mb-4 text-gray-600">
              Call us now for immediate service
            </p>
            <a 
              href="tel:0412345678" 
              className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              041 234 5678
            </a>
            <p className="mt-4 text-gray-600">
              Serving all suburbs in Perth Metropolitan Area
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}