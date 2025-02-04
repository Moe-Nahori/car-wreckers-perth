import { SuzukiData } from '../types';

export const suzukiData: SuzukiData = {
  description: "Suzuki has been a prominent player in the Australian automotive market since the 1970s, known for producing reliable, fuel-efficient vehicles that are well-suited to both urban and off-road environments. The company's reputation for manufacturing compact yet capable vehicles has made them particularly popular in Perth and Western Australia. From the iconic Suzuki Swift that dominates urban streets to the rugged Jimny that tackles off-road terrain with ease, Suzuki's diverse range caters to various driving needs. Their vehicles are known for their durability, low maintenance costs, and strong resale value in the Australian market. With a history spanning over 100 years in vehicle manufacturing globally, Suzuki continues to innovate while maintaining their core values of reliability and efficiency.",
  models: {
    swift: {
      name: 'Swift',
      yearRange: '2005-2024',
      popularParts: [
        'Engine Assembly',
        'Transmission',
        'Front Bumper',
        'Headlights',
        'Tail Lights',
        'Door Panels'
      ],
      commonIssues: [
        'CVT transmission issues in newer models',
        'Power steering pump failures',
        'AC compressor problems',
        'Suspension wear in urban driving'
      ]
    },
    vitara: {
      name: 'Vitara',
      yearRange: '1988-2024',
      popularParts: [
        'Engine Components',
        'Transfer Case',
        'Suspension Parts',
        'Body Panels',
        'Interior Trim',
        '4WD Components'
      ],
      commonIssues: [
        'Timing chain tensioner wear',
        'Transfer case issues',
        'Suspension bushings wear',
        'Differential seal leaks'
      ]
    },
    jimny: {
      name: 'Jimny',
      yearRange: '1970-2024',
      popularParts: [
        'Engine Parts',
        '4WD Components',
        'Body Panels',
        'Suspension Parts',
        'Transfer Case',
        'Differential Parts'
      ],
      commonIssues: [
        'Body rust in older models',
        'Transfer case wear',
        'Suspension bushing deterioration',
        'Engine mount failures'
      ]
    },
    ignis: {
      name: 'Ignis',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Components',
        'CVT Parts',
        'Suspension Components',
        'Body Panels',
        'Interior Trim',
        'Electrical Parts'
      ],
      commonIssues: [
        'CVT transmission issues',
        'Fuel pump problems',
        'Electrical system faults',
        'AC system failures'
      ]
    },
    baleno: {
      name: 'Baleno',
      yearRange: '1995-2024',
      popularParts: [
        'Engine Parts',
        'Transmission Components',
        'Body Panels',
        'Suspension Parts',
        'Interior Trim',
        'Electrical Components'
      ],
      commonIssues: [
        'Automatic transmission problems',
        'Engine mount wear',
        'Suspension component failures',
        'Electrical system issues'
      ]
    }
  }
};