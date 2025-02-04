import { Metadata } from "next"
import MakeModelHero from "@/components/cars/MakeModelHero"
import CommonIssues from "@/components/cars/CommonIssues"
import PriceEstimator from "@/components/cars/PriceEstimator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { QuoteForm } from "@/components"

export const metadata: Metadata = {
  title: "Hyundai Tucson Wreckers Perth | Top Cash for Tucson",
  description: "Sell your Hyundai Tucson for the best price in Perth. We buy all Tucson models (2004-2023) in any condition. Get an instant quote today!",
}

export default function HyundaiTucsonPage() {
  const commonIssues = [
    {
      title: "Engine Problems",
      description: "Theta II 2.0L engines prone to failure due to manufacturing defects, covered by recall"
    },
    {
      title: "DCT Transmission",
      description: "Dual-clutch transmission issues in newer models causing jerky shifts and hesitation"
    },
    {
      title: "Fuel System",
      description: "Fuel pump failures leading to stalling and starting problems"
    },
    {
      title: "Air Conditioning",
      description: "Compressor failures and refrigerant leaks requiring expensive repairs"
    },
    {
      title: "Suspension",
      description: "Front suspension noise and premature wear in older models"
    },
    {
      title: "Electric Parking Brake",
      description: "System malfunctions causing brake engagement/disengagement issues"
    },
    {
      title: "Power Steering",
      description: "Electronic power steering system faults causing assist failures"
    },
    {
      title: "Sunroof Issues",
      description: "Panoramic sunroof leaks and drainage problems in equipped models"
    }
  ]

  const priceRanges = [
    {
      condition: "Poor Condition",
      range: "$500-$2,000",
      description: "Non-running, major mechanical issues, or severe accident damage"
    },
    {
      condition: "Fair Condition",
      range: "$2,000-$5,000",
      description: "Running with issues, high mileage, or cosmetic damage"
    },
    {
      condition: "Good Condition",
      range: "$5,000-$10,000",
      description: "Running well, moderate mileage, minor repairs needed"
    },
    {
      condition: "Excellent Condition",
      range: "$10,000-$18,000",
      description: "Later models in great condition with service history"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MakeModelHero 
        make="Hyundai"
        model="Tucson"
        years="2004-2023"
      />

      <Alert className="max-w-4xl mx-auto my-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Note</AlertTitle>
        <AlertDescription>
          Some Tucson models were affected by engine recalls. We buy all Tucsons, including those with engine or transmission issues.
        </AlertDescription>
      </Alert>

      <CommonIssues 
        make="Hyundai"
        model="Tucson"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Hyundai"
        model="Tucson"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  )
}