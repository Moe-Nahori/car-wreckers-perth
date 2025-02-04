import { CarMakeData } from '../types';

export const mercedesData: CarMakeData = {
  make: 'Mercedes-Benz',
  description: 'Mercedes-Benz is a German luxury vehicle manufacturer with a strong presence in Australia. Known for innovation, luxury, and advanced technology, Mercedes vehicles are highly sought after in the Perth market.',
  australianPresence: '1958-present',
  commonIssues: {
    cClass: [
      {
        title: 'Air Suspension Failure',
        description: 'The AIRMATIC suspension system may fail, particularly in older models. Symptoms include uneven ride height and warning messages.',
        affectedYears: ['2015', '2016', '2017', '2018'],
        repairDifficulty: 4,
        estimatedRepairCost: 3500
      },
      {
        title: 'Balance Shaft Wear',
        description: 'Common in C-Class models with M272 engines, causing timing issues and engine noise.',
        affectedYears: ['2012', '2013', '2014'],
        repairDifficulty: 5,
        estimatedRepairCost: 4500
      }
    ],
    eClass: [
      {
        title: 'Electronic System Issues',
        description: 'COMAND system failures and electrical problems, particularly in models with extensive electronic features.',
        affectedYears: ['2016', '2017', '2018', '2019'],
        repairDifficulty: 4,
        estimatedRepairCost: 2800
      },
      {
        title: '7G-Tronic Transmission Problems',
        description: 'Transmission valve body issues causing rough shifting and delayed engagement.',
        affectedYears: ['2014', '2015', '2016', '2017'],
        repairDifficulty: 5,
        estimatedRepairCost: 5000
      }
    ],
    aClass: [
      {
        title: 'DSG Transmission Issues',
        description: 'Dual-clutch transmission failures reported in some models, causing jerky shifts and hesitation.',
        affectedYears: ['2013', '2014', '2015', '2016'],
        repairDifficulty: 5,
        estimatedRepairCost: 4200
      },
      {
        title: 'Start-Stop System Failure',
        description: 'ECU and battery-related issues affecting the start-stop functionality.',
        affectedYears: ['2017', '2018', '2019'],
        repairDifficulty: 3,
        estimatedRepairCost: 1500
      }
    ],
    glc: [
      {
        title: 'AdBlue System Failure',
        description: 'Issues with the diesel exhaust fluid system, causing reduced performance and warning lights.',
        affectedYears: ['2016', '2017', '2018'],
        repairDifficulty: 4,
        estimatedRepairCost: 2500
      },
      {
        title: 'Panoramic Roof Leaks',
        description: 'Water ingress issues around panoramic sunroof seals.',
        affectedYears: ['2017', '2018', '2019'],
        repairDifficulty: 3,
        estimatedRepairCost: 1800
      }
    ],
    gle: [
      {
        title: 'Air Suspension Compressor Failure',
        description: 'Complete failure of the air suspension system requiring compressor replacement.',
        affectedYears: ['2015', '2016', '2017'],
        repairDifficulty: 4,
        estimatedRepairCost: 4500
      },
      {
        title: 'Infotainment System Issues',
        description: 'Screen freezing and system crashes in the MBUX infotainment system.',
        affectedYears: ['2018', '2019', '2020'],
        repairDifficulty: 3,
        estimatedRepairCost: 2200
      }
    ]
  },
  models: {
    cClass: {
      name: 'C-Class',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'Transmission',
        'AIRMATIC Suspension',
        'LED Headlights',
        'COMAND System',
        'Alloy Wheels'
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
          range: "$4,000 - $7,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$2,000 - $4,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 3500,
        fair: 6000,
        good: 9000
      },
      highValueParts: [
        {
          name: 'Complete Engine (2.0L Turbo)',
          averagePrice: 8500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete engine assembly with turbocharger, low kilometers'
        },
        {
          name: '9G-Tronic Transmission',
          averagePrice: 6500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete automatic transmission, fully tested'
        },
        {
          name: 'LED Headlight Assembly',
          averagePrice: 2800,
          condition: 'good',
          availability: 'high',
          description: 'Complete Multibeam LED headlight assembly with control unit'
        }
      ],
      compatibleModels: [
        {
          make: 'Mercedes-Benz',
          model: 'GLC',
          yearRange: '2015-2024',
          compatibleParts: [
            'Engine Components',
            'Suspension Parts',
            'Interior Electronics',
            'Some Body Panels'
          ]
        }
      ]
    },
    eClass: {
      name: 'E-Class',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'Transmission',
        'Air Suspension',
        'COMAND System',
        'LED Matrix Headlights',
        'Interior Trim'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$15,000 - $25,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$10,000 - $15,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$5,000 - $10,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$2,500 - $5,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 4500,
        fair: 7500,
        good: 12000
      },
      highValueParts: [
        {
          name: 'V6 Engine Assembly',
          averagePrice: 12000,
          condition: 'good',
          availability: 'medium',
          description: 'Complete V6 engine with turbochargers'
        },
        {
          name: 'AIRMATIC Suspension Set',
          averagePrice: 4500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete air suspension system with compressor'
        }
      ],
      compatibleModels: [
        {
          make: 'Mercedes-Benz',
          model: 'GLE',
          yearRange: '2015-2024',
          compatibleParts: [
            'Engine Components',
            'Electronic Systems',
            'Interior Parts',
            'Some Suspension Components'
          ]
        }
      ]
    },
    aClass: {
      name: 'A-Class',
      yearRange: '2013-2024',
      popularParts: [
        'Engine Assembly',
        'DSG Transmission',
        'MBUX System',
        'LED Headlights',
        'AMG Body Kit',
        'Sport Seats'
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
          range: "$1,500 - $3,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 2800,
        fair: 5000,
        good: 8000
      },
      highValueParts: [
        {
          name: '2.0L Turbo Engine',
          averagePrice: 7500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete engine assembly for AMG models'
        },
        {
          name: 'DSG Transmission',
          averagePrice: 5500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete dual-clutch transmission with mechatronic unit'
        }
      ],
      compatibleModels: [
        {
          make: 'Mercedes-Benz',
          model: 'CLA',
          yearRange: '2013-2024',
          compatibleParts: [
            'Engine Components',
            'Transmission Parts',
            'Interior Electronics',
            'Suspension Components'
          ]
        }
      ]
    },
    glc: {
      name: 'GLC',
      yearRange: '2015-2024',
      popularParts: [
        'Engine Assembly',
        'Air Suspension',
        'LED Headlights',
        'COMAND System',
        'Power Tailgate',
        'AWD Components'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$18,000 - $25,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$12,000 - $18,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$6,000 - $12,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$3,000 - $6,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 4000,
        fair: 7000,
        good: 11000
      },
      highValueParts: [
        {
          name: 'Diesel Engine Assembly',
          averagePrice: 9500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete diesel engine with turbocharger'
        },
        {
          name: '4MATIC Transfer Case',
          averagePrice: 3500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete AWD system components'
        }
      ],
      compatibleModels: [
        {
          make: 'Mercedes-Benz',
          model: 'C-Class',
          yearRange: '2015-2024',
          compatibleParts: [
            'Engine Components',
            'Electronic Systems',
            'Interior Parts',
            'Some Body Components'
          ]
        }
      ]
    },
    gle: {
      name: 'GLE',
      yearRange: '2015-2024',
      popularParts: [
        'Engine Assembly',
        'Air Suspension',
        'MBUX System',
        'LED Matrix Headlights',
        'Power Tailgate',
        'Interior Trim'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$25,000 - $35,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$15,000 - $25,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$8,000 - $15,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$4,000 - $8,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 5500,
        fair: 9000,
        good: 15000
      },
      highValueParts: [
        {
          name: 'V8 Engine Assembly',
          averagePrice: 15000,
          condition: 'good',
          availability: 'low',
          description: 'Complete V8 engine for AMG models'
        },
        {
          name: 'Air Suspension System',
          averagePrice: 5500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete air suspension with compressor and control unit'
        }
      ],
      compatibleModels: [
        {
          make: 'Mercedes-Benz',
          model: 'E-Class',
          yearRange: '2015-2024',
          compatibleParts: [
            'Engine Components',
            'Electronic Systems',
            'Interior Components',
            'Some Suspension Parts'
          ]
        }
      ]
    }
  }
};