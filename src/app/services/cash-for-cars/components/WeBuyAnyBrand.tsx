export default function WeBuyAnyBrand() {
  const carBrands = [
    {
      make: "Toyota",
      models: ["Camry", "Corolla", "HiLux", "RAV4", "Prado", "LandCruiser"]
    },
    {
      make: "Holden",
      models: ["Commodore", "Cruze", "Captiva", "Colorado", "Astra"]
    },
    {
      make: "Ford",
      models: ["Ranger", "Falcon", "Territory", "Focus", "Mustang"]
    },
    {
      make: "Mazda",
      models: ["Mazda3", "CX-5", "BT-50", "Mazda2", "CX-3"]
    },
    {
      make: "Hyundai",
      models: ["i30", "Tucson", "Santa Fe", "Accent", "Elantra"]
    },
    {
      make: "Nissan",
      models: ["Navara", "X-Trail", "Patrol", "Qashqai", "Pulsar"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            We Buy All Car Brands
          </h2>
          <p className="text-lg text-gray-600">
            From Japanese to European, American to Australian - we buy all makes and models at competitive prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carBrands.map((brand) => (
            <div key={brand.make} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{brand.make}</h3>
              <div className="flex flex-wrap gap-2">
                {brand.models.map((model) => (
                  <span
                    key={model}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-gray-600">
          Don't see your car listed? No worries - we buy ALL makes and models!
        </div>
      </div>
    </section>
  );
}