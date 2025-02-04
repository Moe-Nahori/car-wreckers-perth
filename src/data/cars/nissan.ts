import { CarMakeData } from '../types';

export const nissanData: CarMakeData = {
  make: 'Nissan',
  description: 'Nissan is a Japanese automotive manufacturer with a strong presence in Australia since the 1960s. Known for reliable vehicles ranging from compact cars to robust 4x4s, Nissan has established itself as a trusted brand in Perth.',
  australianPresence: '1960s-present',
  commonIssues: {
    'x-trail': [
      {
        title: 'CVT Transmission Problems',
        description: 'Common in models between 2013-2017, causing jerking and power loss.',
        affectedYears: ['2013', '2014', '2015', '2016', '2017'],
        repairDifficulty: 4,
        estimatedRepairCost: 4000
      },
      {
        title: 'Fuel System Issues',
        description: 'Fuel pump failures and sensor malfunctions in earlier models.',
        affectedYears: ['2010', '2011', '2012'],
        repairDifficulty: 3,
        estimatedRepairCost: 1200
      }
    ],
    navara: [
      {
        title: 'Timing Chain Issues',
        description: 'YD25 engine timing chain failures, particularly in 2005-2010 models.',
        affectedYears: ['2005', '2006', '2007', '2008', '2009', '2010'],
        repairDifficulty: 5,
        estimatedRepairCost: 3000
      },
      {
        title: 'Chassis Rail Corrosion',
        description: 'D40 models prone to chassis rail rust issues.',
        affectedYears: ['2005', '2006', '2007', '2008', '2009'],
        repairDifficulty: 5,
        estimatedRepairCost: 5000
      }
    ],
    patrol: [
      {
        title: 'Fuel Injection Problems',
        description: 'ZD30 engine injection pump and injector failures.',
        affectedYears: ['2000', '2001', '2002', '2003', '2004', '2005'],
        repairDifficulty: 4,
        estimatedRepairCost: 2500
      },
      {
        title: 'Engine Overheating',
        description: 'Y61 models prone to overheating issues in harsh conditions.',
        affectedYears: ['2000', '2001', '2002', '2003', '2004'],
        repairDifficulty: 3,
        estimatedRepairCost: 1800
      }
    ],
    qashqai: [
      {
        title: 'CVT Transmission Issues',
        description: 'Transmission juddering and failure in earlier models.',
        affectedYears: ['2007', '2008', '2009', '2010'],
        repairDifficulty: 4,
        estimatedRepairCost: 3500
      },
      {
        title: 'Start-Stop System Faults',
        description: 'Battery and system malfunctions in models with this feature.',
        affectedYears: ['2014', '2015', '2016', '2017'],
        repairDifficulty: 2,
        estimatedRepairCost: 800
      }
    ],
    pulsar: [
      {
        title: 'CVT Transmission Problems',
        description: 'Common in later models, causing hesitation and power loss.',
        affectedYears: ['2013', '2014', '2015'],
        repairDifficulty: 4,
        estimatedRepairCost: 3000
      },
      {
        title: 'Engine Mount Failure',
        description: 'Engine mount deterioration causing vibration and noise.',
        affectedYears: ['2012', '2013', '2014'],
        repairDifficulty: 2,
        estimatedRepairCost: 600
      }
    ]
  },
  models: {
    'x-trail': {
      name: 'X-Trail',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'CVT Transmission',
        'Door Assemblies',
        'Suspension Components',
        'Electronic Modules',
        'Alloy Wheels'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,000 - $7,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$2,000 - $4,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$800 - $2,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$200 - $800",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 500,
        fair: 1400,
        good: 3000
      },
      highValueParts: [
        {
          name: 'Complete Engine',
          averagePrice: 3500,
          condition: 'good',
          availability: 'high',
          description: 'Complete engine assembly with warranty'
        },
        {
          name: 'CVT Transmission',
          averagePrice: 2500,
          condition: 'good',
          availability: 'medium',
          description: 'Tested and working transmission'
        }
      ]
    },
    navara: {
      name: 'Navara',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'Transmission',
        'Differential',
        'Body Panels',
        'Suspension Parts',
        'Chassis Components'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$5,000 - $8,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$3,000 - $5,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$1,000 - $3,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$300 - $1,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 650,
        fair: 2000,
        good: 4000
      },
      highValueParts: [
        {
          name: 'Diesel Engine',
          averagePrice: 4500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete diesel engine, compression tested'
        },
        {
          name: 'Manual Transmission',
          averagePrice: 1800,
          condition: 'good',
          availability: 'high',
          description: 'Complete gearbox assembly'
        }
      ]
    },
    patrol: {
      name: 'Patrol',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly',
        'Transfer Case',
        'Axle Assemblies',
        'Body Panels',
        'Suspension Components',
        '4WD System Parts'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$6,000 - $10,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$3,000 - $6,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$1,000 - $3,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$500 - $1,000",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 750,
        fair: 2000,
        good: 4500
      },
      highValueParts: [
        {
          name: 'Diesel Engine',
          averagePrice: 5500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete engine with warranty'
        },
        {
          name: '4WD System',
          averagePrice: 2500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete 4WD drivetrain components'
        }
      ]
    },
    qashqai: {
      name: 'Qashqai',
      yearRange: '2007-2024',
      popularParts: [
        'Engine Assembly',
        'CVT Transmission',
        'Door Assemblies',
        'Electronic Modules',
        'Interior Components',
        'Suspension Parts'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$4,000 - $7,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$2,000 - $4,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$800 - $2,000",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$200 - $800",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 500,
        fair: 1400,
        good: 3000
      },
      highValueParts: [
        {
          name: 'Engine Assembly',
          averagePrice: 3200,
          condition: 'good',
          availability: 'high',
          description: 'Complete engine with low kilometers'
        },
        {
          name: 'CVT Transmission',
          averagePrice: 2200,
          condition: 'good',
          availability: 'medium',
          description: 'Tested transmission assembly'
        }
      ]
    },
    pulsar: {
      name: 'Pulsar',
      yearRange: '2000-2017',
      popularParts: [
        'Engine Assembly',
        'Transmission',
        'Body Panels',
        'Interior Trim',
        'Suspension Parts',
        'Electronic Components'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$3,000 - $5,000",
          description: "Running perfectly with minimal wear, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$1,500 - $3,000",
          description: "Running with minor issues, some wear and tear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$500 - $1,500",
          description: "Significant mechanical issues, high mileage, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$100 - $500",
          description: "Non-running, severe damage, missing parts, or complete mechanical failure."
        }
      ],
      averageValue: {
        poor: 300,
        fair: 1000,
        good: 2250
      },
      highValueParts: [
        {
          name: 'Complete Engine',
          averagePrice: 2200,
          condition: 'good',
          availability: 'high',
          description: 'Low mileage engine assembly'
        },
        {
          name: 'Automatic Transmission',
          averagePrice: 1500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete transmission with warranty'
        }
      ]
    }
  }
};