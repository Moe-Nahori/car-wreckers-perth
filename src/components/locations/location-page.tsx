import { Card, CardContent } from "@/components/ui/card"
import { companyInfo } from "@/config/company-info"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LocationPageProps {
  suburb: string
  title: string
  description: string
  content: {
    introduction: string[]
    services: string[]
    process: string[]
  }
  servicesOffered: string[]
  nearbySuburbs: string[]
}

export default function LocationPage({
  suburb,
  title,
  description,
  content,
  servicesOffered,
  nearbySuburbs,
}: LocationPageProps) {
  // Format address
  const formattedAddress = [
    companyInfo.address.street,
    companyInfo.address.suburb,
    `${companyInfo.address.city} ${companyInfo.address.state} ${companyInfo.address.postcode}`,
    companyInfo.address.country
  ].join(', ');

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground text-center mb-12">{description}</p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Car Removal in {suburb}</h2>
              {content.introduction.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Services in {suburb}</h2>
              {content.services.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Car Removal Process</h2>
              {content.process.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-2">
                <strong>Address:</strong><br />
                {formattedAddress}
              </p>
              <p className="mb-2">
                <strong>Email:</strong><br />
                {companyInfo.email}
              </p>
              {companyInfo.phone && (
                <p className="mb-4">
                  <strong>Phone:</strong><br />
                  {companyInfo.phone}
                </p>
              )}
              <Link href="/quote">
                <Button className="w-full">Get a Quote</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Services We Offer</h2>
              <ul className="list-disc pl-4 space-y-2">
                {servicesOffered.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Nearby Suburbs</h2>
              <ul className="list-disc pl-4 space-y-2">
                {nearbySuburbs.map((suburb, index) => (
                  <li key={index}>{suburb}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}