'use client';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-blue-100">
            {subtitle}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:0477080980"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-50 transition"
            >
              Call 0477 080 980
            </a>
            <button
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg text-lg font-bold transition"
            >
              Get Instant Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}