export const hyundaiData = {
  description: `Hyundai has become one of Australia's most popular car brands, known for its reliability, value, and comprehensive warranty coverage. Since entering the Australian market, Hyundai has established a strong presence with a wide range of vehicles from small cars to SUVs. Their vehicles are well-supported with parts and service across Perth and Western Australia.`,
  
  models: {
    i30: {
      name: "i30",
      yearRange: "2007-2024",
      popularParts: [
        "Engine Assembly",
        "DCT Transmission",
        "Manual Transmission",
        "Front Bumper",
        "Headlights",
        "Door Panels",
        "Tail Lights",
        "Alloy Wheels",
        "Interior Trim",
        "Steering Components"
      ],
      commonIssues: [
        {
          title: "Steering Problems",
          description: "Electric power steering issues in first-gen models (2007-2012)."
        },
        {
          title: "Engine Issues",
          description: "Theta II engine recalls affecting some models between 2007-2011."
        },
        {
          title: "Transmission",
          description: "DCT transmission judder in models equipped with dual-clutch gearbox."
        },
        {
          title: "Suspension Noise",
          description: "Front suspension creaking noises common in earlier models."
        },
        {
          title: "Fuel System",
          description: "Fuel pump failures reported in some 2010-2015 models."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,000 - $9,999",
          description: "Recent models (2019-2024), well maintained, low kilometers."
        },
        {
          condition: "Good Condition",
          range: "$2,500 - $4,000",
          description: "2015-2018 models, moderate wear, regular maintenance."
        },
        {
          condition: "Fair Condition",
          range: "$1,000 - $2,500",
          description: "2010-2014 models, running with issues, high kilometers."
        },
        {
          condition: "Poor Condition",
          range: "$200 - $1,000",
          description: "Pre-2010 models, non-running, major issues or accident damaged."
        }
      ]
    },
    tucson: {
      name: "Tucson",
      yearRange: "2004-2024",
      popularParts: [
        "Engine",
        "Automatic Transmission",
        "Front Bumper",
        "Headlights",
        "Door Panels",
        "Tailgate",
        "Alloy Wheels",
        "Air Conditioning",
        "Radiator",
        "Control Modules"
      ],
      commonIssues: [
        {
          title: "Engine Failure",
          description: "Some models affected by Theta II engine recalls requiring replacement."
        },
        {
          title: "DCT Problems",
          description: "Dual-clutch transmission issues in certain model years."
        },
        {
          title: "Suspension",
          description: "Front suspension wear leading to noise and handling issues."
        },
        {
          title: "Air Conditioning",
          description: "AC compressor failures common in older models."
        },
        {
          title: "Electronics",
          description: "Various electrical issues including infotainment problems."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$5,000 - $12,000",
          description: "Recent models with low kilometers and full service history."
        },
        {
          condition: "Good Condition",
          range: "$3,000 - $5,000",
          description: "Older models running well with regular maintenance."
        },
        {
          condition: "Fair Condition",
          range: "$1,500 - $3,000",
          description: "High mileage with some mechanical issues."
        },
        {
          condition: "Poor Condition",
          range: "$500 - $1,500",
          description: "Non-running or major mechanical problems."
        }
      ]
    },
    santafe: {
      name: "Santa Fe",
      yearRange: "2000-2024",
      popularParts: [
        "Engine Assembly",
        "Automatic Transmission",
        "Door Panels",
        "Tailgate",
        "Front Bumper",
        "Alloy Wheels",
        "Headlights",
        "Interior Trim",
        "Air Conditioning",
        "Control Modules"
      ],
      commonIssues: [
        {
          title: "Engine Problems",
          description: "2.2L diesel engine timing belt failures and oil pump issues."
        },
        {
          title: "Transmission",
          description: "Automatic transmission failures in high-mileage vehicles."
        },
        {
          title: "4WD System",
          description: "Transfer case and differential issues in AWD models."
        },
        {
          title: "Suspension",
          description: "Front and rear suspension wear causing noise and handling issues."
        },
        {
          title: "Electrical",
          description: "Various electrical problems including central locking and window issues."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$6,000 - $15,000",
          description: "Later models with good service history and low kilometers."
        },
        {
          condition: "Good Condition",
          range: "$3,500 - $6,000",
          description: "Well-maintained older models with some wear."
        },
        {
          condition: "Fair Condition",
          range: "$1,500 - $3,500",
          description: "Higher mileage with mechanical issues needing attention."
        },
        {
          condition: "Poor Condition",
          range: "$500 - $1,500",
          description: "Non-running or severe mechanical problems."
        }
      ]
    },
    accent: {
      name: "Accent",
      yearRange: "2000-2024",
      popularParts: [
        "Engine",
        "Manual Transmission",
        "Automatic Transmission",
        "Door Panels",
        "Front Bumper",
        "Headlights",
        "Tail Lights",
        "Interior Trim",
        "Radiator",
        "Air Conditioning"
      ],
      commonIssues: [
        {
          title: "Transmission",
          description: "Automatic transmission failures in high-mileage vehicles."
        },
        {
          title: "Engine Timing",
          description: "Timing belt failures if not replaced at scheduled intervals."
        },
        {
          title: "Suspension",
          description: "Front suspension wear causing noise and handling issues."
        },
        {
          title: "Electrical",
          description: "Various electrical issues including starter motor problems."
        },
        {
          title: "Air Conditioning",
          description: "AC compressor and condenser failures in older models."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$3,000 - $8,000",
          description: "Recent models with low kilometers and good service history."
        },
        {
          condition: "Good Condition",
          range: "$1,500 - $3,000",
          description: "Older models running well with regular maintenance."
        },
        {
          condition: "Fair Condition",
          range: "$500 - $1,500",
          description: "High mileage with mechanical issues needing attention."
        },
        {
          condition: "Poor Condition",
          range: "$100 - $500",
          description: "Non-running or major mechanical problems."
        }
      ]
    },
    elantra: {
      name: "Elantra",
      yearRange: "1990-2024",
      popularParts: [
        "Engine Assembly",
        "Automatic Transmission",
        "Door Panels",
        "Front Bumper",
        "Headlights",
        "Tail Lights",
        "Alloy Wheels",
        "Interior Trim",
        "Radiator",
        "Air Conditioning"
      ],
      commonIssues: [
        {
          title: "Engine Problems",
          description: "Some models affected by engine recalls requiring replacement."
        },
        {
          title: "Transmission",
          description: "Automatic transmission issues in certain model years."
        },
        {
          title: "Steering",
          description: "Power steering system failures in older models."
        },
        {
          title: "Suspension",
          description: "Front suspension wear causing noise and handling issues."
        },
        {
          title: "Fuel System",
          description: "Fuel pump failures reported in some models."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,000 - $10,000",
          description: "Recent models with low kilometers and service history."
        },
        {
          condition: "Good Condition",
          range: "$2,000 - $4,000",
          description: "Well-maintained older models with some wear."
        },
        {
          condition: "Fair Condition",
          range: "$800 - $2,000",
          description: "High mileage with mechanical issues needing attention."
        },
        {
          condition: "Poor Condition",
          range: "$200 - $800",
          description: "Non-running or severe mechanical problems."
        }
      ]
    }
  }
};