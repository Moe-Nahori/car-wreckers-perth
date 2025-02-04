import { CarMakeData } from '../types';

export const mitsubishiData: CarMakeData = {
  make: 'Mitsubishi',
  description: 'Mitsubishi is a Japanese automotive manufacturer with a strong presence in Australia, particularly known for its reliable utility vehicles and SUVs. Their vehicles are popular in Perth for both commercial and family use.',
  australianPresence: '1980-present',
  commonIssues: {
    triton: [
      {
        title: 'Timing Chain Failure',
        description: 'Early model MN and MQ Tritons (2009-2015) can experience premature timing chain wear, indicated by rattling noise on startup.',
        affectedYears: ['2009', '2010', '2011', '2012', '2013', '2014', '2015'],
        repairDifficulty: 4,
        estimatedRepairCost: 2800
      },
      {
        title: 'Diesel Injector Problems',
        description: 'Common in 2.4L diesel engines, causing rough idle and poor fuel economy.',
        affectedYears: ['2015', '2016', '2017', '2018'],
        repairDifficulty: 3,
        estimatedRepairCost: 2200
      }
    ],
    pajero: [
      {
        title: 'Fuel Injection System Issues',
        description: 'Diesel models can experience injector and fuel pump failures, particularly in NT and NW models.',
        affectedYears: ['2006', '2007', '2008', '2009', '2010'],
        repairDifficulty: 4,
        estimatedRepairCost: 3000
      },
      {
        title: 'Transfer Case Problems',
        description: 'Super Select 4WD system may develop issues, causing engagement problems and noise.',
        affectedYears: ['2010', '2011', '2012', '2013'],
        repairDifficulty: 5,
        estimatedRepairCost: 2500
      }
    ],
    asx: [
      {
        title: 'CVT Transmission Issues',
        description: 'Early models can experience CVT transmission problems, causing jerky acceleration and hesitation.',
        affectedYears: ['2010', '2011', '2012', '2013'],
        repairDifficulty: 5,
        estimatedRepairCost: 4000
      },
      {
        title: 'Oil Consumption',
        description: 'Some 2.0L engines experience higher than normal oil consumption.',
        affectedYears: ['2012', '2013', '2014', '2015'],
        repairDifficulty: 3,
        estimatedRepairCost: 1800
      }
    ],
    outlander: [
      {
        title: 'CVT Transmission Failure',
        description: 'Particularly in early third-generation models, CVT transmissions may fail prematurely.',
        affectedYears: ['2013', '2014', '2015'],
        repairDifficulty: 5,
        estimatedRepairCost: 4500
      },
      {
        title: 'PHEV Battery System Issues',
        description: 'Hybrid models may experience battery management system faults.',
        affectedYears: ['2014', '2015', '2016', '2017'],
        repairDifficulty: 4,
        estimatedRepairCost: 3000
      }
    ],
    lancer: [
      {
        title: 'Automatic Transmission Problems',
        description: 'CVT transmission issues causing jerky operation and failure.',
        affectedYears: ['2007', '2008', '2009', '2010'],
        repairDifficulty: 5,
        estimatedRepairCost: 3500
      },
      {
        title: 'Engine Mount Failure',
        description: 'Premature engine mount wear causing excessive vibration.',
        affectedYears: ['2008', '2009', '2010', '2011'],
        repairDifficulty: 2,
        estimatedRepairCost: 800
      }
    ]
  },
  models: {
    triton: {
      name: 'Triton',
      yearRange: '2006-2024',
      popularParts: [
        'Engine Assembly',
        'Transmission',
        'Differential',
        'Tray/Bed',
        'Front Bumper',
        'Tailgate'
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
          range: "$1,000 - $3,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 2000,
        fair: 4000,
        good: 6000
      },
      highValueParts: [
        {
          name: 'Complete Engine (2.4L Diesel)',
          averagePrice: 4500,
          condition: 'good',
          availability: 'high',
          description: 'Complete diesel engine assembly with turbo, low kilometers'
        },
        {
          name: 'Automatic Transmission',
          averagePrice: 2800,
          condition: 'good',
          availability: 'medium',
          description: 'Complete automatic transmission for diesel models'
        },
        {
          name: '4WD Transfer Case',
          averagePrice: 1500,
          condition: 'good',
          availability: 'high',
          description: 'Complete 4WD transfer case assembly'
        }
      ],
      compatibleModels: [
        {
          make: 'Mitsubishi',
          model: 'Pajero Sport',
          yearRange: '2015-2024',
          compatibleParts: [
            'Engine Components',
            'Transmission Parts',
            '4WD System',
            'Some Suspension Components'
          ]
        }
      ]
    },
    pajero: {
      name: 'Pajero',
      yearRange: '1982-2024',
      popularParts: [
        'Engine Assembly',
        'Transfer Case',
        'Door Assemblies',
        'Differential',
        'ECU',
        'Seats'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$12,000 - $18,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$8,000 - $12,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$4,000 - $8,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$1,500 - $4,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 2500,
        fair: 5000,
        good: 8000
      },
      highValueParts: [
        {
          name: '3.2L Diesel Engine',
          averagePrice: 5500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete diesel engine, fully tested'
        },
        {
          name: 'Super Select Transfer Case',
          averagePrice: 2200,
          condition: 'good',
          availability: 'medium',
          description: 'Complete Super Select 4WD system'
        }
      ],
      compatibleModels: [
        {
          make: 'Mitsubishi',
          model: 'Challenger',
          yearRange: '2009-2016',
          compatibleParts: [
            'Engine Components',
            'Some 4WD Parts',
            'Interior Components'
          ]
        }
      ]
    },
    asx: {
      name: 'ASX',
      yearRange: '2010-2024',
      popularParts: [
        'Engine Assembly',
        'CVT Transmission',
        'Front Bumper',
        'Tailgate',
        'Headlights',
        'Dashboard'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$8,000 - $12,000",
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
          range: "$1,000 - $2,500",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 1500,
        fair: 3000,
        good: 5000
      },
      highValueParts: [
        {
          name: '2.0L Engine Assembly',
          averagePrice: 3200,
          condition: 'good',
          availability: 'high',
          description: 'Complete engine with low kilometers'
        },
        {
          name: 'CVT Transmission',
          averagePrice: 2800,
          condition: 'good',
          availability: 'medium',
          description: 'Reconditioned CVT transmission with warranty'
        }
      ],
      compatibleModels: [
        {
          make: 'Nissan',
          model: 'Qashqai',
          yearRange: '2014-2024',
          compatibleParts: [
            'Some Engine Components',
            'Suspension Parts',
            'Interior Fittings'
          ]
        }
      ]
    },
    outlander: {
      name: 'Outlander',
      yearRange: '2003-2024',
      popularParts: [
        'Engine Assembly',
        'CVT Transmission',
        'Hybrid Battery',
        'Front Bumper',
        'Tailgate',
        'AWD Components'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$10,000 - $15,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$7,000 - $10,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$3,500 - $7,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$1,500 - $3,500",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 2000,
        fair: 4000,
        good: 7000
      },
      highValueParts: [
        {
          name: 'PHEV Hybrid System',
          averagePrice: 6500,
          condition: 'good',
          availability: 'low',
          description: 'Complete hybrid system including battery and motors'
        },
        {
          name: '2.4L Engine Assembly',
          averagePrice: 3800,
          condition: 'good',
          availability: 'high',
          description: 'Complete petrol engine, low kilometers'
        }
      ],
      compatibleModels: [
        {
          make: 'Nissan',
          model: 'X-Trail',
          yearRange: '2013-2024',
          compatibleParts: [
            'Platform Components',
            'Some Suspension Parts',
            'Interior Components'
          ]
        }
      ]
    },
    lancer: {
      name: 'Lancer',
      yearRange: '1973-2024',
      popularParts: [
        'Engine Assembly',
        'Transmission',
        'Front Bumper',
        'Hood',
        'Alloy Wheels',
        'Tail Lights'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$6,000 - $10,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$4,000 - $6,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$2,000 - $4,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$500 - $2,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 800,
        fair: 2000,
        good: 4000
      },
      highValueParts: [
        {
          name: '2.0L Engine',
          averagePrice: 2500,
          condition: 'good',
          availability: 'high',
          description: 'Complete engine assembly with warranty'
        },
        {
          name: 'Evolution Drivetrain Components',
          averagePrice: 4500,
          condition: 'good',
          availability: 'low',
          description: 'Rare Evolution model specific parts'
        }
      ],
      compatibleModels: [
        {
          make: 'Mitsubishi',
          model: 'ASX',
          yearRange: '2010-2024',
          compatibleParts: [
            'Engine Components',
            'Suspension Parts',
            'Some Interior Parts'
          ]
        }
      ]
    }
  }
};