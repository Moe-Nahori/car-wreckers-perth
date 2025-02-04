import { Metadata } from "next"
import MakeModelHero from "@/components/cars/MakeModelHero"
import CommonIssues from "@/components/cars/CommonIssues"
import PriceEstimator from "@/components/cars/PriceEstimator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { QuoteForm } from "@/components"

export const metadata: Metadata = {
  title: "Holden Astra Wreckers Perth | Cash for Astra",
  description: "Sell your Holden Astra for top dollar in Perth. We buy all Astra models (1996-2020) in any condition. Get an instant quote today!",
}

export default function HoldenAstraPage() {
  const commonIssues = [
    {
      title: "Timing Belt",
      description: "Timing belt failures in older models causing engine damage"
    },
    {
      title: "Transmission",
      description: "Automatic transmission issues, particularly in TS and AH models"
    },
    {
      title: "Water Pump",
      description: "Premature water pump failure leading to overheating"
    },
    {
      title: "Electrical Problems",
      description: "Various electrical faults affecting ECU and sensors"
    },
    {
      title: "Power Steering",
      description: "Power steering pump and rack failures common"
    },
    {
      title: "Suspension",
      description: "Front suspension wear causing noise and handling issues"
    },
    {
      title: "Oil Consumption",
      description: "Excessive oil consumption in 1.8L and 2.2L engines"
    },
    {
      title: "AC System",
      description: "Air conditioning compressor and condenser failures"
    }
  ]

  const priceRanges = [
    {
      condition: "Poor Condition",
      range: "$200-$800",
      description: "Non-running, major mechanical issues, or accident damaged"
    },
    {
      condition: "Fair Condition",
      range: "$800-$2,000",
      description: "Running with issues, high mileage, needs repairs"
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
        make="Holden"
        model="Astra"
        years="1996-2020"
      />

      <Alert className="max-w-4xl mx-auto my-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Note</AlertTitle>
        <AlertDescription>
          With Holden's exit from Australia, parts availability may become limited. Consider selling before repair costs increase.
        </AlertDescription>
      </Alert>

      <CommonIssues 
        make="Holden"
        model="Astra"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Holden"
        model="Astra"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  )
}