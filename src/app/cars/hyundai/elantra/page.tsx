import { Metadata } from "next"
import MakeModelHero from "@/components/cars/MakeModelHero"
import CommonIssues from "@/components/cars/CommonIssues"
import PriceEstimator from "@/components/cars/PriceEstimator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { QuoteForm } from "@/components"

export const metadata: Metadata = {
  title: "Hyundai Elantra Wreckers Perth | Best Price for Elantra",
  description: "Sell your Hyundai Elantra for top cash in Perth. We buy all Elantra models (1990-2023) in any condition. Get an instant quote today!",
}

export default function HyundaiElantraPage() {
  const commonIssues = [
    {
      title: "Engine Problems",
      description: "Timing belt failures and oil consumption issues in older models"
    },
    {
      title: "Transmission Issues",
      description: "Manual clutch wear and automatic transmission shifting problems"
    },
    {
      title: "Steering Problems",
      description: "Power steering pump failures and rack leaks requiring replacement"
    },
    {
      title: "Air Conditioning",
      description: "Compressor failures and refrigerant leaks in most models"
    },
    {
      title: "Electrical System",
      description: "Various sensor failures causing check engine lights and performance issues"
    },
    {
      title: "Suspension",
      description: "Front suspension noise and premature component wear in older models"
    },
    {
      title: "Brake System",
      description: "Master cylinder failures and premature brake wear issues"
    },
    {
      title: "Fuel System",
      description: "Fuel pump failures and injector problems affecting performance"
    }
  ]

  const priceRanges = [
    {
      condition: "Poor Condition",
      range: "$300-$1,000",
      description: "Non-running, major mechanical issues, or severe accident damage"
    },
    {
      condition: "Fair Condition",
      range: "$1,000-$2,500",
      description: "Running with issues, high mileage, or cosmetic damage"
    },
    {
      condition: "Good Condition",
      range: "$2,500-$5,000",
      description: "Running well, moderate mileage, minor repairs needed"
    },
    {
      condition: "Excellent Condition",
      range: "$5,000-$8,000",
      description: "Later models in great condition with service history"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MakeModelHero 
        make="Hyundai"
        model="Elantra"
        years="1990-2023"
      />

      <Alert className="max-w-4xl mx-auto my-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Note</AlertTitle>
        <AlertDescription>
          With Hyundai's move to the i30 nameplate in Australia, parts for older Elantras may become scarce. Consider selling before repair costs increase.
        </AlertDescription>
      </Alert>

      <CommonIssues 
        make="Hyundai"
        model="Elantra"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Hyundai"
        model="Elantra"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  )
}