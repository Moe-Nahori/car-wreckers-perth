import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { companyInfo } from "@/config/company-info"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "./components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | iCar Wreckers Perth",
  description: "Contact iCar Wreckers Perth for instant quotes and same-day car removal services across Perth metropolitan area.",
}

export default function ContactPage() {
  const formattedAddress = `${companyInfo.address.street}, ${companyInfo.address.suburb}, ${companyInfo.address.city}, ${companyInfo.address.state} ${companyInfo.address.postcode}`;

  const businessHours = {
    monday: companyInfo.openingHours.monday,
    tuesday: companyInfo.openingHours.tuesday,
    wednesday: companyInfo.openingHours.wednesday,
    thursday: companyInfo.openingHours.thursday,
    friday: companyInfo.openingHours.friday,
    saturday: companyInfo.openingHours.saturday,
    sunday: companyInfo.openingHours.sunday,
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">{companyInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{companyInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">{formattedAddress}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <div className="text-muted-foreground">
                      <p>Monday - Friday: {businessHours.monday}</p>
                      <p>Saturday: {businessHours.saturday}</p>
                      <p>Sunday: {businessHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Service Areas</h2>
              <p className="text-muted-foreground mb-4">
                We service all suburbs across the Perth metropolitan area including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {companyInfo.serviceArea.mainLocations.map((location) => (
                  <div key={location}>• {location}</div>
                ))}
                <div>• And many more...</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </main>
  )
}