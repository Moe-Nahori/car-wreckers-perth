const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const posts = [
    {
      title: "How to Get the Best Price for Your Old Car in Perth",
      slug: "how-to-get-best-price-old-car-perth",
      content: `<p class="lead">Getting the best price for your old car in Perth doesn't have to be complicated. Here are our top tips for maximizing your car's value:</p>

      <img src="/blog/car-value-assessment.jpg" alt="Car value assessment in Perth" class="my-8 rounded-xl" />

      <h2 class="text-2xl font-bold mt-8 mb-4">1. Know Your Car's Worth</h2>
      <p>Research similar models and their selling prices in Perth. Consider factors like:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Age and mileage</li>
        <li>Overall condition</li>
        <li>Service history</li>
        <li>Market demand</li>
      </ul>

      <img src="/blog/car-documentation.jpg" alt="Car documentation and paperwork" class="my-8 rounded-xl" />

      <h2 class="text-2xl font-bold mt-8 mb-4">2. Gather Documentation</h2>
      <p>Having all your paperwork ready shows that you're a responsible owner:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Service records</li>
        <li>Registration papers</li>
        <li>Accident history (if any)</li>
      </ul>

      <img src="/blog/car-buyer-types.jpg" alt="Different types of car buyers" class="my-8 rounded-xl" />

      <h2 class="text-2xl font-bold mt-8 mb-4">3. Choose the Right Buyer</h2>
      <p>Different buyers offer different advantages:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Car wreckers (best for end-of-life vehicles)</li>
        <li>Private buyers (might pay more but takes longer)</li>
        <li>Dealers (convenient but lower offers)</li>
      </ul>`,
      excerpt: "Learn how to maximize the value of your old car when selling it in Perth with our expert tips and guidance.",
      category: "Car Selling Guide",
      author: "Perth Car Expert",
      published: true,
      image: "/blog/sell-car-perth-hero.jpg",
      metaTitle: "How to Get the Best Price for Your Old Car in Perth | Expert Guide",
      metaDesc: "Maximize your car's value with our expert guide on selling old cars in Perth. Learn about documentation, pricing, and choosing the right buyer."
    },
    {
      title: "The Environmental Benefits of Car Recycling",
      slug: "environmental-benefits-car-recycling",
      content: `<p class="lead">Car recycling plays a crucial role in environmental conservation. Here's how it helps:</p>

      <img src="/blog/car-recycling-process.jpg" alt="Car recycling process" class="my-8 rounded-xl" />

      <h2 class="text-2xl font-bold mt-8 mb-4">Resource Conservation</h2>
      <p>Recycling cars helps conserve valuable resources:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Metal recovery and reuse</li>
        <li>Plastic recycling</li>
        <li>Oil and fluid proper disposal</li>
      </ul>

      <img src="/blog/recycled-materials.jpg" alt="Recycled car materials" class="my-8 rounded-xl" />

      <h2 class="text-2xl font-bold mt-8 mb-4">Reducing Landfill Impact</h2>
      <p>Every recycled car means less waste in landfills:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Fewer toxic materials in ground</li>
        <li>Reduced land use for dumps</li>
        <li>Better waste management</li>
      </ul>

      <img src="/blog/sustainable-future.jpg" alt="Sustainable automotive future" class="my-8 rounded-xl" />`,
      excerpt: "Discover how car recycling helps protect our environment and conserve valuable resources for future generations.",
      category: "Environmental",
      author: "Environmental Specialist",
      published: true,
      image: "/blog/environmental-benefits-hero.jpg",
      metaTitle: "Environmental Benefits of Car Recycling | Sustainable Auto Disposal",
      metaDesc: "Learn about the positive environmental impact of car recycling, including resource conservation and reduced landfill waste."
    }
  ]

  for (const post of posts) {
    await prisma.blogPost.create({
      data: post
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })