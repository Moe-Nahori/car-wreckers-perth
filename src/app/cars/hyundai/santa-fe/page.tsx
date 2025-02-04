import { Metadata } from "next"
import MakeModelHero from "@/components/cars/MakeModelHero"
import CommonIssues from "@/components/cars/CommonIssues"
import PriceEstimator from "@/components/cars/PriceEstimator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { QuoteForm } from "@/components"

export const metadata: Metadata = {
  title: "Hyundai Santa Fe Wreckers Perth | Cash for Santa Fe",
  description: "Sell your Hyundai Santa Fe for top dollar in Perth. We buy all Santa Fe models (2000-2023) in any condition. Get an instant quote today!",
}

export default function HyundaiSantaFePage() {
  const commonIssues = [
    {
      title: "Engine Issues",
      description: "Theta II engine failures reported in 2013-2019 models, subject to recall"
    },
    {
      title: "Transmission Problems",
      description: "Automatic transmission shudder and harsh shifting in earlier models"
    },
    {
      title: "Fuel System",
      description: "High-pressure fuel pump failures in diesel variants"
    },
    {
      title: "Electrical Issues",
      description: "Dashboard display failures and electrical glitches common"
    },
    {
      title: "AWD System",
      description: "Transfer case and differential problems in AWD models"
    },
    {
      title: "Air Conditioning",
      description: "Compressor failures and refrigerant leaks requiring replacement"
    },
    {
      title: "Suspension",
      description: "Front strut and control arm bushing wear causing noise"
    },
    {
      title: "Brake System",
      description: "ABS module failures and premature brake wear issues"
    }
  ]

  const priceRanges = [
    {
      condition: "Poor Condition",
      range: "$500-$2,500",
      description: "Non-running, major mechanical issues, or accident damaged"
    },
    {
      condition: "Fair Condition",
      range: "$2,500-$6,000",
      description: "Running with issues, high mileage, needs repairs"
    },
    {
      condition: "Good Condition",
      range: "$6,000-$12,000",
      description: "Running well, moderate mileage, minor repairs needed"
    },
    {
      condition: "Excellent Condition",
      range: "$12,000-$20,000",
      description: "Later models in great condition with service history"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MakeModelHero 
        make="Hyundai"
        model="Santa Fe"
        years="2000-2023"
      />

      <Alert className="max-w-4xl mx-auto my-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Note</AlertTitle>
        <AlertDescription>
          Some Santa Fe models were affected by engine recalls. We buy all models, including those with engine or transmission problems.
        </AlertDescription>
      </Alert>

      <CommonIssues 
        make="Hyundai"
        model="Santa Fe"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Hyundai"
        model="Santa Fe"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  )
}