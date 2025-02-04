import { Metadata } from "next"
import MakeModelHero from "@/components/cars/MakeModelHero"
import CommonIssues from "@/components/cars/CommonIssues"
import PriceEstimator from "@/components/cars/PriceEstimator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { QuoteForm } from "@/components"

export const metadata: Metadata = {
  title: "Ford Fiesta Wreckers Perth | Cash for Fiesta",
  description: "Sell your Ford Fiesta for top dollar in Perth. We buy all Fiesta models (2004-2020) in any condition. Get an instant quote today!",
}

export default function FordFiestaPage() {
  const commonIssues = [
    {
      title: "PowerShift Transmission",
      description: "Severe reliability issues with dual-clutch automatic transmission"
    },
    {
      title: "Clutch Problems",
      description: "Manual models experiencing premature clutch wear and failure"
    },
    {
      title: "Engine Mounts",
      description: "Engine mount deterioration causing excessive vibration"
    },
    {
      title: "Door Latches",
      description: "Door latch failures preventing doors from closing properly"
    },
    {
      title: "Electrical Issues",
      description: "Battery drain and alternator problems common across models"
    },
    {
      title: "Cooling System",
      description: "Coolant leaks and thermostat housing failures"
    },
    {
      title: "Suspension",
      description: "Front suspension noise and premature component wear"
    },
    {
      title: "Power Steering",
      description: "Electric power steering failures in later models"
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
      range: "$4,000-$8,000",
      description: "Later models in great condition with service history"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MakeModelHero 
        make="Ford"
        model="Fiesta"
        years="2004-2020"
      />

      <Alert className="max-w-4xl mx-auto my-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Note</AlertTitle>
        <AlertDescription>
          Fiesta models with PowerShift transmissions were subject to a class action. We buy all variants regardless of transmission condition.
        </AlertDescription>
      </Alert>

      <CommonIssues 
        make="Ford"
        model="Fiesta"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Ford"
        model="Fiesta"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  )
}