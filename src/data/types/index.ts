interface CommonIssue {
  title: string
  description: string
  affectedYears: string[]
  repairDifficulty: number
  estimatedRepairCost: number
}

interface HighValuePart {
  name: string
  averagePrice: number
  condition: string
  availability: string
  description: string
}

interface CompatibleModel {
  make: string
  model: string
  yearRange: string
  compatibleParts: string[]
}

interface CarModel {
  name: string
  yearRange: string
  popularParts: string[]
  averageValue: {
    poor: number
    fair: number
    good: number
  }
  highValueParts: HighValuePart[]
  compatibleModels: CompatibleModel[]
}

interface ModelMap {
  [key: string]: CarModel
}

interface CommonIssuesMap {
  [key: string]: CommonIssue[]
}

export interface CarMakeData {
  make: string
  description: string
  australianPresence: string
  commonIssues: CommonIssuesMap
  models: ModelMap
}