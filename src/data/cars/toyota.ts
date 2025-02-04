import { ToyotaData } from '../types';

export const toyotaData: ToyotaData = {
  description: `Toyota, established in 1937, has been a dominant force in the Australian automotive market for decades. Known for reliability and durability, Toyota vehicles are among the most popular in Perth and across Western Australia. The brand's commitment to quality manufacturing and continuous innovation has resulted in many long-lasting vehicles that maintain good value even at the end of their lifecycle.`,
  
  models: {
    corolla: {
      name: "Corolla",
      yearRange: "1994-2024",
      popularParts: [
        "Engine",
        "Transmission",
        "Front Bumper",
        "Headlights",
        "Door Panels",
        "Side Mirrors",
        "Tail Lights",
        "Wheels",
        "Radiator",
        "Air Conditioning Components"
      ],
      commonIssues: [
        {
          title: "Transmission Issues",
          description: "Common in models between 2009-2014, symptoms include delayed shifting and slipping gears."
        },
        {
          title: "Oil Consumption",
          description: "Models from 2009-2011 may experience excessive oil consumption requiring regular top-ups."
        },
        {
          title: "Steering Problems",
          description: "Some models experience electric power steering failure, particularly in hot conditions."
        },
        {
          title: "Airbag Recalls",
          description: "Several models affected by Takata airbag recalls between 2002-2014."
        },
        {
          title: "Engine Noise",
          description: "Some models develop engine knocking noise, particularly in earlier models with high mileage."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$3,000 - $9,999",
          description: "Running vehicle with minor wear and tear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$1,500 - $3,000",
          description: "Running vehicle with some mechanical issues, moderate wear and tear, may need repairs."
        },
        {
          condition: "Fair Condition",
          range: "$500 - $1,500",
          description: "Non-running or significant mechanical issues, high mileage, major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$100 - $500",
          description: "Severe damage, missing parts, very old models, or complete mechanical failure."
        }
      ]
    },
    camry: {
      name: "Camry",
      yearRange: "1990-2024",
      popularParts: [
        "Engine Assembly",
        "Automatic Transmission",
        "Front/Rear Bumpers",
        "LED Headlights",
        "Alloy Wheels",
        "Door Panels",
        "Boot Lid",
        "Dashboard",
        "Seats",
        "Hybrid Battery"
      ],
      commonIssues: [
        {
          title: "Excessive Oil Consumption",
          description: "2007-2009 models may consume oil at a higher rate than normal."
        },
        {
          title: "Transmission Shudder",
          description: "Some models experience transmission shuddering, particularly when cold."
        },
        {
          title: "Power Steering Issues",
          description: "Electric power steering failures reported in certain model years."
        },
        {
          title: "Brake System Problems",
          description: "ABS module failures reported in some older models."
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
          range: "$2,000 - $4,000",
          description: "Running with minor issues, regular wear and tear."
        },
        {
          condition: "Fair Condition",
          range: "$800 - $2,000",
          description: "Major repairs needed, significant wear."
        },
        {
          condition: "Poor Condition",
          range: "$200 - $800",
          description: "Non-running, severe damage, or very old."
        }
      ]
    },
    hilux: {
      name: "HiLux",
      yearRange: "1990-2024",
      popularParts: [
        "Diesel Engine",
        "Manual Transmission",
        "Bull Bar",
        "Tray",
        "Differential",
        "Turbocharger",
        "Suspension Components",
        "4x4 Transfer Case",
        "Doors",
        "Bonnet"
      ],
      commonIssues: [
        {
          title: "DPF Issues",
          description: "Diesel Particulate Filter problems in modern diesel variants."
        },
        {
          title: "Timing Belt Failure",
          description: "Critical maintenance item in diesel models."
        },
        {
          title: "Suspension Wear",
          description: "Common in vehicles used for heavy loads or off-road."
        },
        {
          title: "Injector Problems",
          description: "Diesel injector issues in certain model years."
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
          range: "$1,000 - $3,000",
          description: "Significant repairs needed, heavy wear."
        },
        {
          condition: "Poor Condition",
          range: "$300 - $1,000",
          description: "Major damage or mechanical failure."
        }
      ]
    },
    rav4: {
      name: "RAV4",
      yearRange: "1994-2024",
      popularParts: [
        "Engine",
        "CVT Transmission",
        "Hybrid System",
        "AWD Components",
        "Door Panels",
        "Tailgate",
        "Front Bumper",
        "Headlights",
        "Suspension",
        "Interior Trim"
      ],
      commonIssues: [
        {
          title: "Transmission Hesitation",
          description: "CVT models may experience hesitation or jerking."
        },
        {
          title: "Oil Consumption",
          description: "Some models consume more oil than expected."
        },
        {
          title: "AWD System Issues",
          description: "Transfer case problems in older models."
        },
        {
          title: "Suspension Noise",
          description: "Front suspension may develop creaking sounds."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,500 - $13,000",
          description: "Fully functional, minimal wear, documented history."
        },
        {
          condition: "Good Condition",
          range: "$2,500 - $4,500",
          description: "Running with minor issues, regular wear."
        },
        {
          condition: "Fair Condition",
          range: "$1,000 - $2,500",
          description: "Needs significant repairs, heavy wear."
        },
        {
          condition: "Poor Condition",
          range: "$250 - $1,000",
          description: "Non-running or severe damage."
        }
      ]
    },
    landcruiser: {
      name: "LandCruiser",
      yearRange: "1990-2024",
      popularParts: [
        "Diesel Engine",
        "Automatic Transmission",
        "4x4 System",
        "Differential",
        "Bull Bar",
        "Suspension",
        "Door Panels",
        "Interior Trim",
        "Wheels",
        "Body Panels"
      ],
      commonIssues: [
        {
          title: "Injector Problems",
          description: "Common in diesel variants, causing rough running."
        },
        {
          title: "Suspension Bushings",
          description: "Wear accelerated by heavy off-road use."
        },
        {
          title: "Turbocharger Issues",
          description: "Turbo failure in diesel models."
        },
        {
          title: "Body Rust",
          description: "Particularly in older models or coastal areas."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$8,000 - $20,000",
          description: "Good running order, minimal issues, service history."
        },
        {
          condition: "Good Condition",
          range: "$4,000 - $8,000",
          description: "Running with some wear, minor repairs needed."
        },
        {
          condition: "Fair Condition",
          range: "$2,000 - $4,000",
          description: "Major repairs needed, significant wear."
        },
        {
          condition: "Poor Condition",
          range: "$500 - $2,000",
          description: "Non-running or severe mechanical issues."
        }
      ]
    },
    prado: {
      name: "Prado",
      yearRange: "1990-2024",
      popularParts: [
        "Diesel Engine",
        "Automatic Transmission",
        "4WD Components",
        "Suspension Parts",
        "Body Panels",
        "Interior Trim",
        "Bull Bar",
        "Differential",
        "Transfer Case",
        "Electronic Modules"
      ],
      commonIssues: [
        {
          title: "DPF Problems",
          description: "Modern diesel models can experience DPF blockage."
        },
        {
          title: "Injector Failure",
          description: "Common in diesel variants after high mileage."
        },
        {
          title: "Suspension Wear",
          description: "Bushings and shocks wear from off-road use."
        },
        {
          title: "ECU Issues",
          description: "Electronic control unit problems in some models."
        }
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$6,000 - $18,000",
          description: "Fully functional, minimal wear, documented history."
        },
        {
          condition: "Good Condition",
          range: "$3,500 - $6,000",
          description: "Running with minor issues, regular wear."
        },
        {
          condition: "Fair Condition",
          range: "$1,500 - $3,500",
          description: "Needs significant repairs, heavy wear."
        },
        {
          condition: "Poor Condition",
          range: "$400 - $1,500",
          description: "Non-running or severe damage."
        }
      ]
    }
  }
};