import { CarMakeData } from '../types';

export const bmwData: CarMakeData = {
  make: 'BMW',
  description: 'BMW is a German luxury vehicle manufacturer known for its high-performance cars and SUVs. With a strong presence in Australia, BMW vehicles are renowned for their driving dynamics and premium quality.',
  australianPresence: '1979-present',
  commonIssues: {
    '3series': [
      {
        title: 'Timing Chain Issues',
        description: 'N47 diesel engines (2007-2015) commonly experience timing chain failures. Symptoms include rattling noise from the engine and potential catastrophic failure.',
        affectedYears: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
        repairDifficulty: 5,
        estimatedRepairCost: 4500
      },
      {
        title: 'VANOS System Failure',
        description: 'Variable valve timing system issues causing rough idle, loss of power, and check engine light.',
        affectedYears: ['2006', '2007', '2008', '2009', '2010'],
        repairDifficulty: 4,
        estimatedRepairCost: 2800
      }
    ],
    '5series': [
      {
        title: 'Water Pump Failure',
        description: 'Electric water pump commonly fails, leading to overheating issues. Most prevalent in E60/E61 models.',
        affectedYears: ['2004', '2005', '2006', '2007', '2008', '2009', '2010'],
        repairDifficulty: 3,
        estimatedRepairCost: 1500
      },
      {
        title: 'iDrive System Failures',
        description: 'Screen blackouts, system crashes, and navigation issues in the central information display.',
        affectedYears: ['2003', '2004', '2005', '2006', '2007', '2008'],
        repairDifficulty: 4,
        estimatedRepairCost: 2200
      }
    ],
    'x3': [
      {
        title: 'Transfer Case Failure',
        description: 'xDrive system transfer case issues causing grinding noise and AWD malfunction.',
        affectedYears: ['2011', '2012', '2013', '2014', '2015'],
        repairDifficulty: 4,
        estimatedRepairCost: 3500
      },
      {
        title: 'Oil Filter Housing Gasket Leak',
        description: 'Common oil leak from the filter housing gasket, can lead to serious issues if not addressed.',
        affectedYears: ['2013', '2014', '2015', '2016', '2017'],
        repairDifficulty: 3,
        estimatedRepairCost: 800
      }
    ],
    'x5': [
      {
        title: 'Air Suspension Failure',
        description: 'Air suspension system failures common in older models, causing uneven ride height.',
        affectedYears: ['2007', '2008', '2009', '2010', '2011', '2012'],
        repairDifficulty: 4,
        estimatedRepairCost: 2500
      },
      {
        title: 'Valve Cover Gasket Leaks',
        description: 'Oil leaks from valve cover gaskets, particularly in N62 V8 engines.',
        affectedYears: ['2004', '2005', '2006', '2007', '2008'],
        repairDifficulty: 3,
        estimatedRepairCost: 1200
      }
    ],
    'm3': [
      {
        title: 'Rod Bearing Failure',
        description: 'S65 V8 engine rod bearing failures, particularly in E90/E92 M3 models.',
        affectedYears: ['2008', '2009', '2010', '2011', '2012'],
        repairDifficulty: 5,
        estimatedRepairCost: 6500
      },
      {
        title: 'Throttle Actuator Issues',
        description: 'Electronic throttle actuator failures causing limp mode and reduced power.',
        affectedYears: ['2008', '2009', '2010', '2011'],
        repairDifficulty: 4,
        estimatedRepairCost: 1800
      }
    ]
  },
  models: {
    '3series': {
      name: '3 Series',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'Automatic Transmission',
        'Front Bumper',
        'Xenon Headlights',
        'Alloy Wheels',
        'Door Assemblies'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$8,000 - $15,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$5,000 - $8,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$2,500 - $5,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$500 - $2,500",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 1500,
        fair: 3750,
        good: 6500
      },
      highValueParts: [
        {
          name: 'Complete Engine (335i N54/N55)',
          averagePrice: 6500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete twin-turbo engine assembly with low kilometers'
        },
        {
          name: 'ZF 8-Speed Automatic Transmission',
          averagePrice: 4500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete transmission with warranty'
        }
      ],
      compatibleModels: [
        {
          make: 'BMW',
          model: '4 Series',
          yearRange: '2014-2024',
          compatibleParts: [
            'Engine Components',
            'Suspension Parts',
            'Interior Trim',
            'Some Body Panels'
          ]
        }
      ]
    },
    '5series': {
      name: '5 Series',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'iDrive System',
        'LED Headlights',
        'Air Suspension',
        'Front Grille',
        'Dashboard'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$12,000 - $20,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$7,000 - $12,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$3,500 - $7,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$1,000 - $3,500",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 2250,
        fair: 5250,
        good: 9500
      },
      highValueParts: [
        {
          name: 'Complete Engine (550i N63)',
          averagePrice: 8500,
          condition: 'good',
          availability: 'medium',
          description: 'V8 engine assembly with warranty'
        },
        {
          name: 'Air Suspension System',
          averagePrice: 2800,
          condition: 'good',
          availability: 'high',
          description: 'Complete air suspension system with compressor'
        }
      ],
      compatibleModels: [
        {
          make: 'BMW',
          model: '6 Series',
          yearRange: '2011-2024',
          compatibleParts: [
            'Engine Components',
            'Transmission Parts',
            'Electronics',
            'Interior Components'
          ]
        }
      ]
    },
    'x3': {
      name: 'X3',
      yearRange: '2003-2024',
      popularParts: [
        'Engine Assembly',
        'xDrive Transfer Case',
        'Tailgate',
        'LED Headlights',
        'Control Arms',
        'Power Seats'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$10,000 - $15,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$6,000 - $10,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$3,000 - $6,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$800 - $3,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 1900,
        fair: 4500,
        good: 8000
      },
      highValueParts: [
        {
          name: 'Complete Engine (xDrive30i)',
          averagePrice: 5500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete engine with turbocharger and low kilometers'
        },
        {
          name: 'xDrive Transfer Case',
          averagePrice: 2500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete AWD transfer case assembly'
        }
      ],
      compatibleModels: [
        {
          make: 'BMW',
          model: 'X4',
          yearRange: '2014-2024',
          compatibleParts: [
            'Engine Components',
            'xDrive System',
            'Suspension Parts',
            'Interior Elements'
          ]
        }
      ]
    },
    'x5': {
      name: 'X5',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'Air Suspension',
        'Transmission',
        'Panoramic Roof',
        'Leather Seats',
        'Navigation System'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$15,000 - $25,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$8,000 - $15,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$4,000 - $8,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$1,000 - $4,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 2500,
        fair: 6000,
        good: 11500
      },
      highValueParts: [
        {
          name: 'Complete Engine (xDrive50i)',
          averagePrice: 9500,
          condition: 'good',
          availability: 'medium',
          description: 'V8 engine assembly with twin turbos'
        },
        {
          name: 'Air Suspension System',
          averagePrice: 3200,
          condition: 'good',
          availability: 'high',
          description: 'Complete air suspension with compressor and struts'
        }
      ],
      compatibleModels: [
        {
          make: 'BMW',
          model: 'X6',
          yearRange: '2008-2024',
          compatibleParts: [
            'Engine Components',
            'Suspension Systems',
            'Interior Parts',
            'Some Body Panels'
          ]
        }
      ]
    },
    'm3': {
      name: 'M3',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'M DCT Transmission',
        'Carbon Fiber Roof',
        'M Sport Seats',
        'Limited Slip Differential',
        'M Sport Brakes'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$25,000 - $40,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$12,000 - $25,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$5,000 - $12,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$1,500 - $5,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 3250,
        fair: 8500,
        good: 18500
      },
      highValueParts: [
        {
          name: 'S65 V8 Engine',
          averagePrice: 12000,
          condition: 'good',
          availability: 'low',
          description: 'Complete V8 engine from E90/E92 M3'
        },
        {
          name: 'M DCT Transmission',
          averagePrice: 6500,
          condition: 'good',
          availability: 'medium',
          description: 'Dual-clutch transmission with warranty'
        }
      ],
      compatibleModels: [
        {
          make: 'BMW',
          model: 'M4',
          yearRange: '2014-2024',
          compatibleParts: [
            'Engine Components',
            'Transmission Parts',
            'Suspension Components',
            'M-Specific Parts'
          ]
        }
      ]
    }
  }
};