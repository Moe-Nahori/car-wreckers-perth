export const subaruData = {
  description: `Subaru, established in 1953, has built a strong reputation in Australia for its reliable all-wheel-drive vehicles and distinctive boxer engine design. Particularly popular in Perth and Western Australia for their combination of safety, durability, and off-road capability, Subaru vehicles are highly valued in the used car market. The brand's focus on symmetrical all-wheel drive and horizontally-opposed engines creates unique value for parts and recycling.`,
  
  models: {
    impreza: {
      name: "Impreza",
      yearRange: "1992-2024",
      popularParts: [
        "Boxer Engine",
        "AWD System",
        "Transmission",
        "Front Bumper",
        "Headlights",
        "Door Panels",
        "Tail Lights",
        "Interior Trim",
        "Alloy Wheels",
        "Electronic Modules"
      ],
      commonIssues: [
        {
          title: "Head Gasket Failure",
          description: "Common in older EJ series engines, particularly models from 1996-2012."
        },
        {
          title: "Oil Consumption",
          description: "Higher than normal oil consumption in some FB series engines."
        },
        {
          title: "CVT Transmission",
          description: "Some models experience CVT reliability issues and shuddering."
        },
        {
          title: "Wheel Bearing Noise",
          description: "Front and rear wheel bearings may require early replacement."
        },
        {
          title: "Air Conditioning",
          description: "AC compressor and condenser failures more common than average."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$3,000 - $8,000",
          description: "Running vehicle with minimal issues, good service history."
        },
        {
          condition: "Good Condition",
          range: "$1,500 - $3,000",
          description: "Running with some mechanical issues, moderate wear and tear."
        },
        {
          condition: "Fair Condition",
          range: "$500 - $1,500",
          description: "Significant mechanical issues or body damage, high mileage."
        },
        {
          condition: "Poor Condition",
          range: "$100 - $500",
          description: "Non-running, severe damage, or very old models."
        }
      ]
    },
    forester: {
      name: "Forester",
      yearRange: "1997-2024",
      popularParts: [
        "Boxer Engine",
        "AWD System",
        "Automatic Transmission",
        "Front/Rear Bumpers",
        "LED Headlights",
        "Door Panels",
        "Tailgate",
        "Suspension Components",
        "Alloy Wheels",
        "Electronic Modules"
      ],
      commonIssues: [
        {
          title: "Head Gasket Issues",
          description: "Common in models before 2012, particularly EJ series engines."
        },
        {
          title: "Oil Consumption",
          description: "FB engines may consume more oil than expected."
        },
        {
          title: "Rear Suspension",
          description: "Rear suspension bushings wear faster than expected."
        },
        {
          title: "CVT Problems",
          description: "CVT transmissions can develop shuddering and reliability issues."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,000 - $12,000",
          description: "Well-maintained, minimal issues, full service history."
        },
        {
          condition: "Good Condition",
          range: "$2,500 - $4,000",
          description: "Running with minor issues, regular wear and tear."
        },
        {
          condition: "Fair Condition",
          range: "$1,000 - $2,500",
          description: "Significant repairs needed, high mileage."
        },
        {
          condition: "Poor Condition",
          range: "$300 - $1,000",
          description: "Non-running or severe mechanical issues."
        }
      ]
    },
    outback: {
      name: "Outback",
      yearRange: "1994-2024",
      popularParts: [
        "Boxer Engine",
        "CVT Transmission",
        "AWD Components",
        "Suspension Parts",
        "Body Panels",
        "LED Headlights",
        "Door Panels",
        "Interior Trim",
        "Alloy Wheels",
        "Electronic Modules"
      ],
      commonIssues: [
        {
          title: "CVT Issues",
          description: "Transmission shuddering and reliability concerns in some models."
        },
        {
          title: "Oil Consumption",
          description: "Some engines consume more oil than expected."
        },
        {
          title: "Suspension Problems",
          description: "Front and rear suspension wear, particularly in high-mileage vehicles."
        },
        {
          title: "Electronics",
          description: "Various electrical issues including infotainment system problems."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,500 - $15,000",
          description: "Good running order, minimal issues, service history."
        },
        {
          condition: "Good Condition",
          range: "$2,500 - $4,500",
          description: "Running with some wear, minor repairs needed."
        },
        {
          condition: "Fair Condition",
          range: "$1,000 - $2,500",
          description: "Major repairs needed, significant wear."
        },
        {
          condition: "Poor Condition",
          range: "$300 - $1,000",
          description: "Non-running or severe mechanical issues."
        }
      ]
    },
    wrx: {
      name: "WRX",
      yearRange: "1994-2024",
      popularParts: [
        "Turbo Engine",
        "Manual Transmission",
        "AWD System",
        "Performance Parts",
        "Body Kits",
        "Alloy Wheels",
        "Brakes",
        "Suspension",
        "Interior Trim",
        "ECU Modules"
      ],
      commonIssues: [
        {
          title: "Ringland Failure",
          description: "EJ257 engines can experience piston ringland failure."
        },
        {
          title: "Turbo Problems",
          description: "Turbocharger wear and failure, particularly in modified vehicles."
        },
        {
          title: "Clutch Wear",
          description: "Manual transmission clutch wear, especially in modified cars."
        },
        {
          title: "Engine Knock",
          description: "Rod knock and bearing issues in high-mileage engines."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$5,000 - $20,000",
          description: "Well-maintained, minimal modifications, good history."
        },
        {
          condition: "Good Condition",
          range: "$3,000 - $5,000",
          description: "Running with minor issues, some modifications."
        },
        {
          condition: "Fair Condition",
          range: "$1,500 - $3,000",
          description: "Needs major repairs, heavily modified."
        },
        {
          condition: "Poor Condition",
          range: "$500 - $1,500",
          description: "Non-running or accident damaged."
        }
      ]
    },
    liberty: {
      name: "Liberty",
      yearRange: "1989-2024",
      popularParts: [
        "Boxer Engine",
        "AWD System",
        "Automatic Transmission",
        "Body Panels",
        "LED Headlights",
        "Door Panels",
        "Interior Trim",
        "Alloy Wheels",
        "Suspension Parts",
        "Electronic Modules"
      ],
      commonIssues: [
        {
          title: "Head Gasket Failure",
          description: "Common in EJ series engines, particularly pre-2012 models."
        },
        {
          title: "Oil Consumption",
          description: "Some engines consume more oil than expected."
        },
        {
          title: "CVT Problems",
          description: "Later models can experience CVT reliability issues."
        },
        {
          title: "Suspension Wear",
          description: "Front and rear suspension components may require early replacement."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$3,500 - $10,000",
          description: "Fully functional, minimal wear, documented history."
        },
        {
          condition: "Good Condition",
          range: "$2,000 - $3,500",
          description: "Running with minor issues, regular wear."
        },
        {
          condition: "Fair Condition",
          range: "$800 - $2,000",
          description: "Needs significant repairs, heavy wear."
        },
        {
          condition: "Poor Condition",
          range: "$200 - $800",
          description: "Non-running or severe damage."
        }
      ]
    }
  }
};