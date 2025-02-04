export const fordData = {
  description: `Ford has been a significant player in the Australian automotive market for decades, with local manufacturing history dating back to 1925. Known for producing iconic Australian vehicles like the Falcon and Territory, Ford has also successfully introduced global models like the Ranger and Mustang. Their vehicles are known for their durability, performance, and strong parts availability across Perth and Western Australia.`,
  
  models: {
    ranger: {
      name: "Ranger",
      yearRange: "2006-2024",
      popularParts: [
        "Engine Assembly",
        "Transmission",
        "Turbocharger",
        "Bull Bar",
        "Door Panels",
        "Tailgate",
        "Wheels",
        "Bonnet",
        "Radiator",
        "Front Bumper"
      ],
      commonIssues: [
        {
          title: "Timing Belt Issues",
          description: "Common in 2.2L and 3.2L diesel engines, requiring replacement at specified intervals."
        },
        {
          title: "Turbocharger Failures",
          description: "Some models experience premature turbocharger wear or failure."
        },
        {
          title: "Transmission Problems",
          description: "Automatic transmission issues reported in certain model years, particularly 2016-2018."
        },
        {
          title: "Injector Issues",
          description: "Diesel injector problems common in high-mileage vehicles."
        },
        {
          title: "DPF Problems",
          description: "Diesel Particulate Filter blockage issues in later models."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$5,000 - $15,000",
          description: "Running perfectly, minimal wear, full service history, all features working."
        },
        {
          condition: "Good Condition",
          range: "$3,000 - $5,000",
          description: "Running with minor issues, regular wear and tear, may need minor repairs."
        },
        {
          condition: "Fair Condition",
          range: "$1,000 - $3,000",
          description: "Running with significant issues or requires major repairs."
        },
        {
          condition: "Poor Condition",
          range: "$300 - $1,000",
          description: "Not running, severe damage, or requires complete overhaul."
        }
      ]
    },
    falcon: {
      name: "Falcon",
      yearRange: "2000-2016",
      popularParts: [
        "Engine",
        "Transmission",
        "Door Panels",
        "Bonnet",
        "Tail Lights",
        "Alloy Wheels",
        "Front Bumper",
        "Rear Bumper",
        "Interior Trim",
        "Dashboard"
      ],
      commonIssues: [
        {
          title: "Transmission Failure",
          description: "Common in BA and BF models, particularly with high mileage."
        },
        {
          title: "Engine Timing Chain",
          description: "Issues with timing chain tensioners in 6-cylinder engines."
        },
        {
          title: "Power Steering",
          description: "Power steering pump and rack failures reported across various models."
        },
        {
          title: "Cooling System",
          description: "Thermostat and water pump failures common in older models."
        },
        {
          title: "Suspension Wear",
          description: "Front control arm bushings and ball joints wear, particularly in early models."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,000 - $12,000",
          description: "Well-maintained, low kilometers, all systems working perfectly."
        },
        {
          condition: "Good Condition",
          range: "$2,000 - $4,000",
          description: "Regular wear and tear, may need minor repairs but generally reliable."
        },
        {
          condition: "Fair Condition",
          range: "$800 - $2,000",
          description: "Higher mileage, multiple issues, needs significant repairs."
        },
        {
          condition: "Poor Condition",
          range: "$200 - $800",
          description: "Non-running, major mechanical issues, or accident damaged."
        }
      ]
    },
    territory: {
      name: "Territory",
      yearRange: "2004-2016",
      popularParts: [
        "Engine",
        "Transmission",
        "Tailgate",
        "Door Panels",
        "Front Bumper",
        "Headlights",
        "Air Conditioning",
        "Interior Trim",
        "Wheels",
        "Control Modules"
      ],
      commonIssues: [
        {
          title: "Transfer Case Failure",
          description: "AWD models prone to transfer case issues, particularly pre-2011 models."
        },
        {
          title: "Transmission Problems",
          description: "ZF 6-speed automatic transmission issues in some models."
        },
        {
          title: "Ball Joint Wear",
          description: "Front suspension ball joints require regular inspection and replacement."
        },
        {
          title: "Power Steering",
          description: "Power steering pump failures common in early models."
        },
        {
          title: "Air Conditioning",
          description: "Compressor and evaporator failures reported across various years."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,500 - $13,000",
          description: "Well-maintained, all systems working, good service history."
        },
        {
          condition: "Good Condition",
          range: "$2,500 - $4,500",
          description: "Regular wear, may need minor repairs but generally reliable."
        },
        {
          condition: "Fair Condition",
          range: "$1,000 - $2,500",
          description: "Multiple issues present, needs significant repairs."
        },
        {
          condition: "Poor Condition",
          range: "$300 - $1,000",
          description: "Non-running, major mechanical issues, or accident damaged."
        }
      ]
    },
    focus: {
      name: "Focus",
      yearRange: "2002-2024",
      popularParts: [
        "Engine",
        "Transmission",
        "Front Bumper",
        "Headlights",
        "Door Panels",
        "Tail Lights",
        "Alloy Wheels",
        "Bonnet",
        "Interior Trim",
        "Radiator"
      ],
      commonIssues: [
        {
          title: "Dual-Clutch Transmission",
          description: "PowerShift transmission issues in models between 2011-2016."
        },
        {
          title: "Engine Cooling",
          description: "Coolant leaks and thermostat housing failures in some models."
        },
        {
          title: "Fuel System",
          description: "Fuel pump and injector problems reported in various years."
        },
        {
          title: "Electrical Issues",
          description: "Various electrical problems including BCM and PCM faults."
        },
        {
          title: "Suspension Noise",
          description: "Front suspension strut and control arm bushing wear."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$3,500 - $10,000",
          description: "Well-maintained, all systems working, good service history."
        },
        {
          condition: "Good Condition",
          range: "$2,000 - $3,500",
          description: "Regular wear, may need minor repairs but reliable."
        },
        {
          condition: "Fair Condition",
          range: "$800 - $2,000",
          description: "Multiple issues present, needs significant repairs."
        },
        {
          condition: "Poor Condition",
          range: "$200 - $800",
          description: "Non-running, major mechanical issues, or accident damaged."
        }
      ]
    },
    fiesta: {
      name: "Fiesta",
      yearRange: "2004-2020",
      popularParts: [
        "Engine",
        "Manual Transmission",
        "Front Bumper",
        "Headlights",
        "Door Panels",
        "Tail Lights",
        "Alloy Wheels",
        "Interior Trim",
        "Radiator",
        "Steering Components"
      ],
      commonIssues: [
        {
          title: "PowerShift Transmission",
          description: "Dual-clutch automatic transmission issues in models between 2011-2016."
        },
        {
          title: "Door Latch Problems",
          description: "Door latch failures reported in some models requiring replacement."
        },
        {
          title: "Engine Cooling",
          description: "Coolant leaks and thermostat issues in some models."
        },
        {
          title: "Electrical Problems",
          description: "Various electrical issues including instrument cluster faults."
        },
        {
          title: "Suspension Components",
          description: "Front suspension wear and noise in older models."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$3,000 - $8,000",
          description: "Well-maintained, all systems working, good service history."
        },
        {
          condition: "Good Condition",
          range: "$1,500 - $3,000",
          description: "Regular wear, may need minor repairs but reliable."
        },
        {
          condition: "Fair Condition",
          range: "$500 - $1,500",
          description: "Multiple issues present, needs significant repairs."
        },
        {
          condition: "Poor Condition",
          range: "$100 - $500",
          description: "Non-running, major mechanical issues, or accident damaged."
        }
      ]
    },
    mustang: {
      name: "Mustang",
      yearRange: "2015-2024",
      popularParts: [
        "Engine",
        "Transmission",
        "Body Panels",
        "Front Bumper",
        "Rear Bumper",
        "Alloy Wheels",
        "Interior Trim",
        "Bonnet",
        "Tail Lights",
        "Performance Parts"
      ],
      commonIssues: [
        {
          title: "Engine Ticking",
          description: "5.0L V8 models may develop engine tick noise, particularly in early models."
        },
        {
          title: "Transmission Shifting",
          description: "MT-82 manual transmission shifting issues reported in some models."
        },
        {
          title: "Body Panel Alignment",
          description: "Panel gap and alignment issues noted in some early production models."
        },
        {
          title: "Electrical Systems",
          description: "Various electrical issues including SYNC system problems."
        },
        {
          title: "Suspension Noise",
          description: "Front suspension creaks and rattles in some models."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$8,000 - $20,000",
          description: "Well-maintained, all systems working, low kilometers."
        },
        {
          condition: "Good Condition",
          range: "$5,000 - $8,000",
          description: "Regular wear, may need minor repairs but generally reliable."
        },
        {
          condition: "Fair Condition",
          range: "$2,500 - $5,000",
          description: "Multiple issues present, needs significant repairs."
        },
        {
          condition: "Poor Condition",
          range: "$1,000 - $2,500",
          description: "Non-running, major mechanical issues, or accident damaged."
        }
      ]
    }
  }
};