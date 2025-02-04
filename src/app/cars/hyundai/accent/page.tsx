import { Metadata } from "next"
import MakeModelHero from "@/components/cars/MakeModelHero"
import CommonIssues from "@/components/cars/CommonIssues"
import PriceEstimator from "@/components/cars/PriceEstimator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { QuoteForm } from "@/components"

export const metadata: Metadata = {
  title: "Hyundai Accent Wreckers Perth | Cash for Accent",
  description: "Sell your Hyundai Accent for top dollar in Perth. We buy all Accent models (2000-2023) in any condition. Free quotes and same-day pickup!",
}

export default function HyundaiAccentPage() {
  const commonIssues = [
    {
      title: "Transmission Problems",
      description: "Automatic transmission failures and shifting issues in models from 2000-2015"
    },
    {
      title: "Engine Mounts",
      description: "Premature engine mount failure causing excessive vibration and noise"
    },
    {
      title: "Suspension Issues",
      description: "Front strut and control arm problems common in older models"
    },
    {
      title: "Power Steering",
      description: "Power steering pump failures and rack leaks requiring replacement"
    },
    {
      title: "Fuel System",
      description: "Fuel pump failures and injector problems affecting performance"
    },
    {
      title: "Air Conditioning",
      description: "Compressor failures and refrigerant leaks in older models"
    },
    {
      title: "Electrical System",
      description: "Various sensor failures causing check engine lights and performance issues"
    },
    {
      title: "Clutch Wear",
      description: "Premature clutch wear in manual transmission models"
    }
  ]

  const priceRanges = [
    {
      condition: "Poor Condition",
      range: "$200-$800",
      description: "Non-running, major mechanical issues, or severe accident damage"
    },
    {
      condition: "Fair Condition",
      range: "$800-$2,000",
      description: "Running with issues, high mileage, or cosmetic damage"
    },
    {
      condition: "Good Condition",
      range: "$2,000-$4,000",
      description: "Running well, moderate mileage, minor repairs needed"
    },
    {
      condition: "Excellent Condition",
      range: "$4,000-$7,000",
      description: "Later models in great condition with service history"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MakeModelHero 
        make="Hyundai"
        model="Accent"
        years="2000-2023"
      />

      <Alert className="max-w-4xl mx-auto my-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Note</AlertTitle>
        <AlertDescription>
          While generally reliable, repair costs can exceed the car's value in older models. We offer fair prices regardless of condition.
        </AlertDescription>
      </Alert>

      <CommonIssues 
        make="Hyundai"
        model="Accent"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Hyundai"
        model="Accent"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  )
}