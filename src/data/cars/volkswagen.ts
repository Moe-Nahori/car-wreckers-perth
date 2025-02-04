import { CarMakeData } from '../types';

export const volkswagenData: CarMakeData = {
  make: 'Volkswagen',
  description: 'Volkswagen has been a significant player in the Australian automotive market since the 1950s. Known for German engineering excellence, VW offers a range of vehicles from the iconic Golf to the versatile Amarok.',
  australianPresence: '1950s-present',
  commonIssues: {
    golf: [
      {
        title: 'DSG Transmission Issues',
        description: 'Common in models between 2008-2016, causing jerky shifting and mechatronic unit failure.',
        affectedYears: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        repairDifficulty: 4,
        estimatedRepairCost: 4500
      },
      {
        title: 'Timing Chain Tensioner Failure',
        description: 'Affects TSI engines, leading to potential engine damage if not addressed.',
        affectedYears: ['2009', '2010', '2011', '2012'],
        repairDifficulty: 5,
        estimatedRepairCost: 3000
      }
    ],
    polo: [
      {
        title: 'DSG Gearbox Problems',
        description: 'Similar to Golf, transmission issues affecting dual-clutch gearboxes.',
        affectedYears: ['2010', '2011', '2012', '2013', '2014'],
        repairDifficulty: 4,
        estimatedRepairCost: 4000
      },
      {
        title: 'Fuel System Issues',
        description: 'High-pressure fuel pump failures in TSI engines.',
        affectedYears: ['2011', '2012', '2013'],
        repairDifficulty: 3,
        estimatedRepairCost: 1500
      }
    ],
    tiguan: [
      {
        title: 'Water Pump Failure',
        description: 'Premature water pump failure leading to coolant leaks and overheating.',
        affectedYears: ['2009', '2010', '2011', '2012'],
        repairDifficulty: 3,
        estimatedRepairCost: 800
      },
      {
        title: 'Timing Chain Issues',
        description: 'Timing chain tensioner problems in early models.',
        affectedYears: ['2008', '2009', '2010'],
        repairDifficulty: 5,
        estimatedRepairCost: 2500
      }
    ],
    passat: [
      {
        title: 'Oil Consumption',
        description: 'Excessive oil consumption in TSI engines.',
        affectedYears: ['2009', '2010', '2011', '2012'],
        repairDifficulty: 4,
        estimatedRepairCost: 3500
      },
      {
        title: 'DPF Problems',
        description: 'Diesel Particulate Filter blockage issues in TDI models.',
        affectedYears: ['2010', '2011', '2012', '2013'],
        repairDifficulty: 3,
        estimatedRepairCost: 2000
      }
    ],
    amarok: [
      {
        title: 'Injector Problems',
        description: 'Common injector failures in TDI engines.',
        affectedYears: ['2011', '2012', '2013', '2014'],
        repairDifficulty: 4,
        estimatedRepairCost: 3000
      },
      {
        title: 'Transmission Issues',
        description: '8-speed automatic transmission problems in later models.',
        affectedYears: ['2015', '2016', '2017'],
        repairDifficulty: 5,
        estimatedRepairCost: 5000
      }
    ]
  },
  models: {
    golf: {
      name: 'Golf',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'DSG Transmission',
        'Front Bumper',
        'Alloy Wheels',
        'Tail Lights',
        'Electronic Modules'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$5,000 - $8,000",
          description: "Running perfectly with well-maintained DSG, no timing chain issues, all electronics functional."
        },
        {
          condition: "Good Condition",
          range: "$3,000 - $5,000",
          description: "Running with minor issues, possible DSG wear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$1,500 - $3,000",
          description: "DSG or timing chain issues present, electrical problems, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$500 - $1,500",
          description: "Non-running, severe mechanical issues, transmission failure, or major damage."
        }
      ],
      averageValue: {
        poor: 800,
        fair: 2500,
        good: 5000
      },
      highValueParts: [
        {
          name: 'Complete Engine (TSI)',
          averagePrice: 4500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete engine assembly with warranty'
        },
        {
          name: 'DSG Transmission',
          averagePrice: 3500,
          condition: 'good',
          availability: 'high',
          description: 'Tested and working DSG gearbox'
        }
      ]
    },
    polo: {
      name: 'Polo',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'DSG Transmission',
        'Door Panels',
        'Dashboard',
        'Suspension Parts',
        'Body Panels'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,000 - $6,000",
          description: "Running perfectly with well-maintained DSG, no fuel system issues, good service history."
        },
        {
          condition: "Good Condition",
          range: "$2,500 - $4,000",
          description: "Running with minor issues, some wear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$1,200 - $2,500",
          description: "DSG or fuel system issues present, or other major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$300 - $1,200",
          description: "Non-running, severe mechanical issues, or major damage."
        }
      ],
      averageValue: {
        poor: 500,
        fair: 2000,
        good: 4000
      },
      highValueParts: [
        {
          name: 'Complete Engine',
          averagePrice: 3500,
          condition: 'good',
          availability: 'medium',
          description: 'Low mileage engine with warranty'
        },
        {
          name: 'DSG Gearbox',
          averagePrice: 2800,
          condition: 'good',
          availability: 'medium',
          description: 'Reconditioned DSG transmission'
        }
      ]
    },
    tiguan: {
      name: 'Tiguan',
      yearRange: '2008-2024',
      popularParts: [
        'Engine Assembly',
        'Transmission',
        'Body Panels',
        'Interior Trim',
        'Suspension Components',
        'Electronic Systems'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$6,000 - $9,000",
          description: "Running perfectly with no water pump or timing chain issues, all systems functional."
        },
        {
          condition: "Good Condition",
          range: "$4,000 - $6,000",
          description: "Running with minor issues, some wear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$2,000 - $4,000",
          description: "Timing chain or water pump issues present, or other major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$800 - $2,000",
          description: "Non-running, severe mechanical issues, or major damage."
        }
      ],
      averageValue: {
        poor: 1000,
        fair: 3000,
        good: 6000
      },
      highValueParts: [
        {
          name: 'Complete Engine',
          averagePrice: 5000,
          condition: 'good',
          availability: 'medium',
          description: 'Tested engine with warranty'
        },
        {
          name: 'DSG Transmission',
          averagePrice: 4000,
          condition: 'good',
          availability: 'medium',
          description: 'Complete transmission assembly'
        }
      ]
    },
    passat: {
      name: 'Passat',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'Transmission',
        'Front End Parts',
        'Interior Components',
        'Electrical Systems',
        'Suspension Parts'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$5,500 - $8,500",
          description: "Running perfectly with no oil consumption issues, DPF in good condition, all systems functional."
        },
        {
          condition: "Good Condition",
          range: "$3,500 - $5,500",
          description: "Running with minor issues, some wear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$1,800 - $3,500",
          description: "Oil consumption or DPF issues present, or other major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$600 - $1,800",
          description: "Non-running, severe mechanical issues, or major damage."
        }
      ],
      averageValue: {
        poor: 900,
        fair: 2800,
        good: 5500
      },
      highValueParts: [
        {
          name: 'TDI Engine',
          averagePrice: 4500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete diesel engine assembly'
        },
        {
          name: 'DSG Gearbox',
          averagePrice: 3500,
          condition: 'good',
          availability: 'medium',
          description: 'Tested DSG transmission'
        }
      ]
    },
    amarok: {
      name: 'Amarok',
      yearRange: '2010-2024',
      popularParts: [
        'Engine Assembly',
        'Transmission',
        'Body Panels',
        'Differential',
        '4x4 System Parts',
        'Interior Components'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$8,000 - $12,000",
          description: "Running perfectly with no injector issues, transmission in good condition, all systems functional."
        },
        {
          condition: "Good Condition",
          range: "$5,000 - $8,000",
          description: "Running with minor issues, some wear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$3,000 - $5,000",
          description: "Injector or transmission issues present, or other major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$1,500 - $3,000",
          description: "Non-running, severe mechanical issues, or major damage."
        }
      ],
      averageValue: {
        poor: 2000,
        fair: 5000,
        good: 8000
      },
      highValueParts: [
        {
          name: 'TDI V6 Engine',
          averagePrice: 8000,
          condition: 'good',
          availability: 'medium',
          description: 'Complete V6 diesel engine'
        },
        {
          name: '8-Speed Auto Transmission',
          averagePrice: 5500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete automatic transmission'
        }
      ]
    }
  }
};