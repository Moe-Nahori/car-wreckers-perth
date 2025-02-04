export const holdenData = {
  description: `Holden, an iconic Australian automotive manufacturer founded in 1856, ceased operations in 2020 but left an indelible mark on Australian motoring history. Known for producing vehicles specifically designed for Australian conditions, Holden vehicles remain highly sought after in the used car market. The brand's legacy of robust engineering and local manufacturing expertise makes their vehicles particularly valuable for parts and recycling in the Perth region.`,
  
  models: {
    commodore: {
      name: "Commodore",
      yearRange: "1978-2020",
      popularParts: [
        "V6/V8 Engines",
        "Automatic Transmission",
        "Front Bumper",
        "Headlights",
        "Door Panels",
        "Alloy Wheels",
        "Tail Lights",
        "Interior Trim",
        "Differential",
        "Suspension Components"
      ],
      commonIssues: [
        {
          title: "Timing Chain Issues",
          description: "Common in V6 models (VZ and VE), can cause engine failure if not addressed."
        },
        {
          title: "Transmission Problems",
          description: "Automatic transmission issues in VE and VF models, particularly in high-mileage vehicles."
        },
        {
          title: "Oil Consumption",
          description: "V6 engines (particularly in VE models) may consume excessive oil."
        },
        {
          title: "Suspension Wear",
          description: "Front suspension components often wear prematurely, causing steering and handling issues."
        },
        {
          title: "Electrical Issues",
          description: "Body control module and electrical system problems in later models."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$3,500 - $10,000",
          description: "Running vehicle with minimal issues, good service history, desirable model."
        },
        {
          condition: "Good Condition",
          range: "$1,800 - $3,500",
          description: "Running with some mechanical issues, regular wear and tear."
        },
        {
          condition: "Fair Condition",
          range: "$800 - $1,800",
          description: "Significant mechanical issues or body damage, high mileage."
        },
        {
          condition: "Poor Condition",
          range: "$200 - $800",
          description: "Non-running, severe damage, or very old models."
        }
      ]
    },
    cruze: {
      name: "Cruze",
      yearRange: "2009-2016",
      popularParts: [
        "Engine",
        "Transmission",
        "Turbocharger",
        "Front Bumper",
        "Headlights",
        "Door Panels",
        "Tail Lights",
        "Interior Trim",
        "Radiator",
        "Electronic Modules"
      ],
      commonIssues: [
        {
          title: "Turbo Failure",
          description: "Common in 1.4L turbo models, causing loss of power and engine damage."
        },
        {
          title: "Water Pump Failure",
          description: "Premature water pump failure leading to overheating."
        },
        {
          title: "Transmission Issues",
          description: "Both manual and automatic transmissions can develop problems."
        },
        {
          title: "Electrical Problems",
          description: "Various electrical issues including ECU and sensor failures."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$2,500 - $7,000",
          description: "Well-maintained, minimal issues, full service history."
        },
        {
          condition: "Good Condition",
          range: "$1,500 - $2,500",
          description: "Running with minor issues, regular wear and tear."
        },
        {
          condition: "Fair Condition",
          range: "$500 - $1,500",
          description: "Significant repairs needed, high mileage."
        },
        {
          condition: "Poor Condition",
          range: "$100 - $500",
          description: "Non-running or severe mechanical issues."
        }
      ]
    },
    captiva: {
      name: "Captiva",
      yearRange: "2006-2018",
      popularParts: [
        "Engine",
        "Automatic Transmission",
        "Turbocharger",
        "AWD Components",
        "Door Panels",
        "Tailgate",
        "Front Bumper",
        "Headlights",
        "Interior Trim",
        "Electronic Modules"
      ],
      commonIssues: [
        {
          title: "Timing Chain Issues",
          description: "Premature timing chain wear in diesel engines."
        },
        {
          title: "Transmission Failures",
          description: "Automatic transmission problems, particularly in early models."
        },
        {
          title: "Turbo Problems",
          description: "Turbocharger failures in diesel variants."
        },
        {
          title: "Electrical Issues",
          description: "Various electrical problems including ECU and sensor failures."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$3,000 - $8,000",
          description: "Fully functional, minimal wear, documented history."
        },
        {
          condition: "Good Condition",
          range: "$1,800 - $3,000",
          description: "Running with minor issues, regular wear."
        },
        {
          condition: "Fair Condition",
          range: "$800 - $1,800",
          description: "Needs significant repairs, heavy wear."
        },
        {
          condition: "Poor Condition",
          range: "$200 - $800",
          description: "Non-running or severe damage."
        }
      ]
    },
    colorado: {
      name: "Colorado",
      yearRange: "2008-2020",
      popularParts: [
        "Diesel Engine",
        "Manual Transmission",
        "Turbocharger",
        "4x4 Components",
        "Bull Bar",
        "Tray",
        "Differential",
        "Suspension Parts",
        "Door Panels",
        "Electronic Modules"
      ],
      commonIssues: [
        {
          title: "Injector Problems",
          description: "Common in diesel models, causing rough running and starting issues."
        },
        {
          title: "Timing Chain Issues",
          description: "Earlier models prone to timing chain wear."
        },
        {
          title: "DPF Problems",
          description: "Diesel Particulate Filter issues in later models."
        },
        {
          title: "Suspension Wear",
          description: "Common in vehicles used for heavy loads or off-road."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,000 - $12,000",
          description: "Good running order, minimal issues, service history."
        },
        {
          condition: "Good Condition",
          range: "$2,500 - $4,000",
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
    astra: {
      name: "Astra",
      yearRange: "1996-2020",
      popularParts: [
        "Engine",
        "Transmission",
        "Turbocharger",
        "Front Bumper",
        "Headlights",
        "Door Panels",
        "Tail Lights",
        "Interior Trim",
        "Suspension Parts",
        "Electronic Modules"
      ],
      commonIssues: [
        {
          title: "Timing Belt Failure",
          description: "Critical maintenance item, can cause engine failure if not replaced."
        },
        {
          title: "Transmission Issues",
          description: "Both manual and automatic transmissions can develop problems."
        },
        {
          title: "Electrical Problems",
          description: "Various electrical issues including ECU and sensor failures."
        },
        {
          title: "Cooling System",
          description: "Thermostat and water pump failures common in older models."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$2,500 - $8,000",
          description: "Fully functional, minimal wear, documented history."
        },
        {
          condition: "Good Condition",
          range: "$1,500 - $2,500",
          description: "Running with minor issues, regular wear."
        },
        {
          condition: "Fair Condition",
          range: "$500 - $1,500",
          description: "Needs significant repairs, heavy wear."
        },
        {
          condition: "Poor Condition",
          range: "$100 - $500",
          description: "Non-running or severe damage."
        }
      ]
    }
  }
};