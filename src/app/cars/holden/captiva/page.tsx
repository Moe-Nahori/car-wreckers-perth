import { Metadata } from "next"
import MakeModelHero from "@/components/cars/MakeModelHero"
import CommonIssues from "@/components/cars/CommonIssues"
import PriceEstimator from "@/components/cars/PriceEstimator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { QuoteForm } from "@/components"

export const metadata: Metadata = {
  title: "Holden Captiva Wreckers Perth | Cash for Captiva",
  description: "Sell your Holden Captiva for top dollar in Perth. We buy all Captiva models (2006-2018) in any condition. Get an instant quote today!",
}

export default function HoldenCaptivaPage() {
  const commonIssues = [
    {
      title: "Timing Chain",
      description: "Timing chain failures in 2.2L diesel engines"
    },
    {
      title: "Transmission",
      description: "Automatic transmission failures, particularly in early models"
    },
    {
      title: "Diesel Injectors",
      description: "Common injector failures in diesel variants"
    },
    {
      title: "Turbocharger",
      description: "Turbo failures in diesel models leading to loss of power"
    },
    {
      title: "Oil Consumption",
      description: "Excessive oil consumption in petrol engines"
    },
    {
      title: "Steering",
      description: "Power steering pump failures and rack leaks"
    },
    {
      title: "Electronics",
      description: "Various electrical issues affecting central locking and windows"
    },
    {
      title: "Suspension",
      description: "Front suspension wear causing noise and handling issues"
    }
  ]

  const priceRanges = [
    {
      condition: "Poor Condition",
      range: "$300-$1,200",
      description: "Non-running, major mechanical issues, or accident damaged"
    },
    {
      condition: "Fair Condition",
      range: "$1,200-$3,000",
      description: "Running with issues, high mileage, needs repairs"
    },
    {
      condition: "Good Condition",
      range: "$3,000-$6,000",
      description: "Running well, moderate mileage, minor repairs needed"
    },
    {
      condition: "Excellent Condition",
      range: "$6,000-$10,000",
      description: "Later models in great condition with service history"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MakeModelHero 
        make="Holden"
        model="Captiva"
        years="2006-2018"
      />

      <Alert className="max-w-4xl mx-auto my-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Note</AlertTitle>
        <AlertDescription>
          With Holden's exit from Australia and known reliability issues, many owners are choosing to sell their Captivas. We offer fair prices regardless of mechanical condition.
        </AlertDescription>
      </Alert>

      <CommonIssues 
        make="Holden"
        model="Captiva"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Holden"
        model="Captiva"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  )
}