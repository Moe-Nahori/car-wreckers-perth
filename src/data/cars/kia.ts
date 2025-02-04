export const kiaData = {
  description: `Kia is a South Korean automotive manufacturer with a strong presence in the Australian market since 1996. Known for reliability and value, Kia vehicles are popular choices in Perth, offering a great combination of features and affordability. Their commitment to quality and innovation has made them a trusted brand in the Australian automotive landscape.`,
  
  models: {
    cerato: {
      name: "Cerato",
      yearRange: "2003-2024",
      popularParts: [
        "Engine Assembly",
        "Transmission",
        "Door Assemblies",
        "Tail Lights",
        "Front Bumper",
        "Alloy Wheels",
        "Power Steering Pump",
        "Radiator",
        "AC Compressor",
        "Interior Trim"
      ],
      commonIssues: [
        {
          title: "Engine Cooling System Failure",
          description: "Common in 2013-2015 models, the cooling system may fail due to thermostat malfunction or water pump issues."
        },
        {
          title: "Transmission Solenoid Issues",
          description: "Affects automatic transmissions, causing rough shifting and delayed engagement."
        },
        {
          title: "Electric Power Steering Problems",
          description: "Some models experience power steering failures requiring unit replacement."
        },
        {
          title: "Air Conditioning Faults",
          description: "AC compressor failures reported in various model years."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$2,500 - $8,000",
          description: "Running vehicle with minor wear and tear, all components functional."
        },
        {
          condition: "Good Condition",
          range: "$1,500 - $2,500",
          description: "Running vehicle with some mechanical issues, moderate wear."
        },
        {
          condition: "Fair Condition",
          range: "$800 - $1,500",
          description: "Non-running or significant mechanical issues, major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$100 - $800",
          description: "Severe damage, missing parts, or complete mechanical failure."
        }
      ]
    },
    sportage: {
      name: "Sportage",
      yearRange: "2005-2024",
      popularParts: [
        "Engine Assembly",
        "AWD Transfer Case",
        "Tailgate",
        "Headlights",
        "Control Arms",
        "Dashboard Assembly",
        "Door Panels",
        "Transmission",
        "Alloy Wheels",
        "Bumpers"
      ],
      commonIssues: [
        {
          title: "Engine Bearing Wear",
          description: "Premature bearing wear in 2.0L and 2.4L engines, particularly in 2011-2016 models."
        },
        {
          title: "Fuel System Problems",
          description: "High-pressure fuel pump failures reported in diesel models."
        },
        {
          title: "AWD System Issues",
          description: "Transfer case problems causing vibration and reduced performance."
        },
        {
          title: "Suspension Problems",
          description: "Control arm bushings wear causing alignment issues."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,000 - $12,000",
          description: "Fully functional, minimal wear, good service history."
        },
        {
          condition: "Good Condition",
          range: "$2,500 - $4,000",
          description: "Running with minor issues, regular wear."
        },
        {
          condition: "Fair Condition",
          range: "$1,200 - $2,500",
          description: "Major repairs needed, significant wear."
        },
        {
          condition: "Poor Condition",
          range: "$300 - $1,200",
          description: "Non-running or severe damage."
        }
      ]
    },
    carnival: {
      name: "Carnival",
      yearRange: "2006-2024",
      popularParts: [
        "Engine Assembly",
        "Sliding Doors",
        "Seats",
        "Bumpers",
        "Power Steering Pump",
        "AC Compressor",
        "Transmission",
        "Door Motors",
        "Tailgate",
        "Interior Trim"
      ],
      commonIssues: [
        {
          title: "Power Sliding Door Failure",
          description: "Electric sliding door mechanisms can fail, preventing proper operation."
        },
        {
          title: "Transmission Problems",
          description: "Some models experience shifting issues and premature wear."
        },
        {
          title: "Engine Oil Consumption",
          description: "Higher than normal oil consumption in some V6 engines."
        },
        {
          title: "AC System Failures",
          description: "Air conditioning compressor and component failures."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$5,000 - $15,000",
          description: "Running perfectly, minimal wear, full service history."
        },
        {
          condition: "Good Condition",
          range: "$3,000 - $5,000",
          description: "Running with minor issues, some wear and tear."
        },
        {
          condition: "Fair Condition",
          range: "$1,500 - $3,000",
          description: "Significant repairs needed, heavy wear."
        },
        {
          condition: "Poor Condition",
          range: "$400 - $1,500",
          description: "Major damage or mechanical failure."
        }
      ]
    },
    rio: {
      name: "Rio",
      yearRange: "2000-2024",
      popularParts: [
        "Engine Assembly",
        "Transmission",
        "Front Bumper",
        "Headlights",
        "Door Mirrors",
        "Alloy Wheels",
        "Radiator",
        "AC Components",
        "Steering Rack",
        "Interior Parts"
      ],
      commonIssues: [
        {
          title: "Transmission Shifting Issues",
          description: "Some models experience delayed or harsh shifting in automatic transmissions."
        },
        {
          title: "Electric Power Steering Failure",
          description: "Electric power steering may fail, requiring complete unit replacement."
        },
        {
          title: "Engine Timing Issues",
          description: "Timing belt failures can occur if not replaced on schedule."
        },
        {
          title: "Suspension Noise",
          description: "Front suspension components can develop squeaks and rattles."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$2,000 - $6,000",
          description: "Fully functional, minimal wear, documented history."
        },
        {
          condition: "Good Condition",
          range: "$1,200 - $2,000",
          description: "Running with minor issues, regular wear."
        },
        {
          condition: "Fair Condition",
          range: "$600 - $1,200",
          description: "Needs significant repairs, heavy wear."
        },
        {
          condition: "Poor Condition",
          range: "$100 - $600",
          description: "Non-running or severe damage."
        }
      ]
    },
    sorento: {
      name: "Sorento",
      yearRange: "2002-2024",
      popularParts: [
        "Engine Assembly",
        "Transmission",
        "AWD System",
        "Front Grille",
        "Tailgate",
        "Seats",
        "Door Panels",
        "Suspension Parts",
        "Differential",
        "Electronics"
      ],
      commonIssues: [
        {
          title: "Engine Knocking",
          description: "Some models experience premature engine bearing wear leading to knocking sounds."
        },
        {
          title: "AWD System Issues",
          description: "Transfer case problems in AWD models can cause vibration and reduced performance."
        },
        {
          title: "Transmission Problems",
          description: "Automatic transmission failures reported in higher mileage vehicles."
        },
        {
          title: "Suspension Wear",
          description: "Front and rear suspension components may wear prematurely."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$5,500 - $15,000",
          description: "Good running order, minimal issues, service history."
        },
        {
          condition: "Good Condition",
          range: "$3,000 - $5,500",
          description: "Running with some wear, minor repairs needed."
        },
        {
          condition: "Fair Condition",
          range: "$1,500 - $3,000",
          description: "Major repairs needed, significant wear."
        },
        {
          condition: "Poor Condition",
          range: "$400 - $1,500",
          description: "Non-running or severe mechanical issues."
        }
      ]
    }
  }
};