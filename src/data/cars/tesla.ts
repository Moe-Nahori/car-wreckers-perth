import { CarMakeData } from '../types';

export const teslaData: CarMakeData = {
  make: 'Tesla',
  description: 'Tesla is a leading electric vehicle manufacturer known for innovation and technology. Their vehicles are increasingly popular in Perth, combining luxury with sustainable transportation.',
  australianPresence: '2014-present',
  commonIssues: {
    'model-3': [
      {
        title: 'MCU Touchscreen Failure',
        description: 'Touchscreen may become unresponsive or display yellowing around edges. Common in early production models.',
        affectedYears: ['2017', '2018', '2019'],
        repairDifficulty: 4,
        estimatedRepairCost: 2500
      },
      {
        title: 'Battery Degradation',
        description: 'Some units experience faster than expected battery capacity loss, particularly in high-temperature climates.',
        affectedYears: ['2018', '2019', '2020'],
        repairDifficulty: 5,
        estimatedRepairCost: 7000
      }
    ],
    'model-y': [
      {
        title: 'Heat Pump System Issues',
        description: 'Climate control system may fail in extreme weather conditions due to heat pump malfunction.',
        affectedYears: ['2020', '2021', '2022'],
        repairDifficulty: 4,
        estimatedRepairCost: 3000
      },
      {
        title: 'Body Panel Alignment',
        description: 'Panel gaps and misalignment issues reported in early production models.',
        affectedYears: ['2020', '2021'],
        repairDifficulty: 3,
        estimatedRepairCost: 1500
      }
    ],
    'model-s': [
      {
        title: 'Air Suspension Failure',
        description: 'Air suspension system may fail, causing vehicle to sit unevenly or not adjust ride height.',
        affectedYears: ['2015', '2016', '2017', '2018'],
        repairDifficulty: 4,
        estimatedRepairCost: 3500
      },
      {
        title: 'Door Handle Mechanism',
        description: 'Electronic door handles may fail to present or retract properly.',
        affectedYears: ['2014', '2015', '2016', '2017'],
        repairDifficulty: 3,
        estimatedRepairCost: 900
      }
    ],
    'model-x': [
      {
        title: 'Falcon Wing Door Issues',
        description: 'Sensors and mechanisms in the falcon wing doors can fail, preventing proper operation.',
        affectedYears: ['2016', '2017', '2018', '2019'],
        repairDifficulty: 5,
        estimatedRepairCost: 4000
      },
      {
        title: 'Center Display Failure',
        description: 'Main touchscreen may fail due to eMMC memory wear.',
        affectedYears: ['2016', '2017', '2018'],
        repairDifficulty: 4,
        estimatedRepairCost: 2800
      }
    ]
  },
  models: {
    'model-3': {
      name: 'Model 3',
      yearRange: '2017-2024',
      popularParts: [
        'Battery Modules',
        'Electric Drive Unit',
        'Touchscreen Display',
        'Door Assemblies',
        'Front/Rear Bumpers',
        'LED Light Assemblies'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$35,000 - $45,000",
          description: "Running perfectly with minimal battery degradation, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$25,000 - $35,000",
          description: "Running with minor issues, some battery wear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$15,000 - $25,000",
          description: "Significant battery degradation, electrical issues, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$8,000 - $15,000",
          description: "Non-running, severe damage, missing components, or significant battery issues."
        }
      ],
      averageValue: {
        poor: 15000,
        fair: 25000,
        good: 35000
      },
      highValueParts: [
        {
          name: 'Battery Pack',
          averagePrice: 12000,
          condition: 'good',
          availability: 'medium',
          description: 'Complete battery pack with good capacity retention'
        },
        {
          name: 'Electric Drive Unit',
          averagePrice: 5000,
          condition: 'good',
          availability: 'medium',
          description: 'Rear drive unit, tested and working'
        },
        {
          name: 'MCU Touchscreen',
          averagePrice: 1800,
          condition: 'good',
          availability: 'high',
          description: 'Main control unit display with updated eMMC'
        }
      ],
      compatibleModels: []
    },
    'model-y': {
      name: 'Model Y',
      yearRange: '2020-2024',
      popularParts: [
        'Battery Modules',
        'Heat Pump Assembly',
        'Electric Drive Units',
        'Suspension Components',
        'Body Panels',
        'Interior Trim'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$40,000 - $50,000",
          description: "Running perfectly with minimal battery degradation, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$30,000 - $40,000",
          description: "Running with minor issues, some battery wear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$20,000 - $30,000",
          description: "Significant battery degradation, electrical issues, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$10,000 - $20,000",
          description: "Non-running, severe damage, missing components, or significant battery issues."
        }
      ],
      averageValue: {
        poor: 20000,
        fair: 30000,
        good: 40000
      },
      highValueParts: [
        {
          name: 'Battery Pack',
          averagePrice: 14000,
          condition: 'good',
          availability: 'medium',
          description: 'Complete battery pack with warranty'
        },
        {
          name: 'Heat Pump System',
          averagePrice: 2500,
          condition: 'good',
          availability: 'medium',
          description: 'Complete heat pump assembly with components'
        }
      ],
      compatibleModels: []
    },
    'model-s': {
      name: 'Model S',
      yearRange: '2014-2024',
      popularParts: [
        'Battery Modules',
        'Drive Units',
        'Air Suspension',
        'Door Handles',
        'MCU Display',
        'Bumper Assemblies'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$45,000 - $60,000",
          description: "Running perfectly with minimal battery degradation, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$35,000 - $45,000",
          description: "Running with minor issues, some battery wear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$25,000 - $35,000",
          description: "Significant battery degradation, electrical issues, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$15,000 - $25,000",
          description: "Non-running, severe damage, missing components, or significant battery issues."
        }
      ],
      averageValue: {
        poor: 25000,
        fair: 35000,
        good: 45000
      },
      highValueParts: [
        {
          name: 'Complete Battery Pack',
          averagePrice: 18000,
          condition: 'good',
          availability: 'low',
          description: 'High capacity battery pack, tested and validated'
        },
        {
          name: 'Dual Motor Drive Unit',
          averagePrice: 8000,
          condition: 'good',
          availability: 'medium',
          description: 'Complete front and rear drive units'
        }
      ],
      compatibleModels: []
    },
    'model-x': {
      name: 'Model X',
      yearRange: '2016-2024',
      popularParts: [
        'Battery Pack',
        'Falcon Wing Door Assemblies',
        'Air Suspension',
        'Drive Units',
        'MCU Display',
        'Autopilot Cameras'
      ],
      priceRanges: [
        {
          condition: "Excellent Condition",
          range: "$60,000 - $75,000",
          description: "Running perfectly with minimal battery degradation, all components functional, good service history."
        },
        {
          condition: "Good Condition",
          range: "$45,000 - $60,000",
          description: "Running with minor issues, some battery wear but overall good condition."
        },
        {
          condition: "Fair Condition",
          range: "$30,000 - $45,000",
          description: "Significant battery degradation, electrical issues, or major repairs needed."
        },
        {
          condition: "Poor Condition",
          range: "$20,000 - $30,000",
          description: "Non-running, severe damage, missing components, or significant battery issues."
        }
      ],
      averageValue: {
        poor: 30000,
        fair: 45000,
        good: 60000
      },
      highValueParts: [
        {
          name: 'Battery Pack',
          averagePrice: 20000,
          condition: 'good',
          availability: 'low',
          description: 'Complete battery pack with warranty'
        },
        {
          name: 'Falcon Wing Door',
          averagePrice: 5000,
          condition: 'good',
          availability: 'medium',
          description: 'Complete door assembly with sensors and motors'
        }
      ],
      compatibleModels: []
    }
  }
};