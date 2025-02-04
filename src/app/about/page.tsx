import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { companyInfo } from "@/config/company-info"

export const metadata: Metadata = {
  title: "About Us | iCar Wreckers Perth",
  description: "Perth's trusted car removal and recycling specialists. Family-owned business with over 15 years of experience in sustainable auto recycling.",
}

export default function AboutPage() {
  const formattedAddress = `${companyInfo.address.street}, ${companyInfo.address.suburb}, ${companyInfo.address.city}, ${companyInfo.address.state} ${companyInfo.address.postcode}`;

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About iCar Wreckers Perth</h1>
        <p className="text-xl text-muted-foreground">
          Your Trusted Partner in Sustainable Auto Recycling
        </p>
      </section>

      {/* Mission Statement */}
      <Card className="mb-12">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            At iCar Wreckers Perth, we're committed to providing top-dollar cash for cars while promoting
            environmental sustainability through responsible auto recycling practices. Our goal is to make
            car removal simple, profitable, and eco-friendly for Perth residents.
          </p>
        </CardContent>
      </Card>

      {/* Core Values */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p>
              We prioritize environmental responsibility by recycling over 85% of each vehicle's parts
              and ensuring proper disposal of hazardous materials.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
            <p>
              We offer hassle-free service with same-day car removal and instant cash payments,
              putting our customers' needs first.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-3">Expertise</h3>
            <p>
              Our team brings over 15 years of experience in the auto recycling industry,
              ensuring professional service and fair valuations.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Why Choose iCar Wreckers?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
            <p className="mb-4">
              Based in {companyInfo.address.suburb}, we serve the entire Perth metropolitan area with
              local knowledge and quick response times.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Environmental Leadership</h3>
            <p className="mb-4">
              We're proud to be leading the way in sustainable auto recycling, helping reduce
              landfill waste and promoting circular economy practices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Comprehensive Service</h3>
            <p className="mb-4">
              From free car removal to top cash payments, we handle everything to make the
              process smooth and rewarding for you.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
            <p className="mb-4">
              We operate with all required licenses and full insurance coverage, giving you
              peace of mind throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Work with Us?</h2>
          <p className="mb-4">
            Contact us today for a free quote and experience our professional service firsthand.
          </p>
          <p className="text-lg">
            Email: {companyInfo.email}<br />
            Address: {formattedAddress}
          </p>
        </CardContent>
      </Card>
    </main>
  )
}