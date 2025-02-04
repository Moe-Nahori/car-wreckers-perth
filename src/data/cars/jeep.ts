export const jeepData = {
  description: `Jeep's manufacturing history dates back to 1941, originally as a military vehicle manufacturer. Known for their rugged durability and off-road capabilities, Jeep has become synonymous with adventure and reliability. Their lineup includes iconic models like the Wrangler, Grand Cherokee, and Cherokee, all featuring robust construction and distinctive styling. Jeep's commitment to off-road capability makes their parts highly sought after in the Australian market.`,
  models: {
    'wrangler': {
      name: 'Wrangler',
      yearRange: '2000-2024',
      popularParts: [
        'Engine', 'Transmission', 'Transfer Case', 'Suspension Components',
        'Hard Top', 'Soft Top', 'Doors', 'Roll Cage',
        'Axle Assemblies', 'Off-Road Equipment'
      ],
      commonIssues: [
        'Death wobble in older models',
        'Transmission issues',
        'Coolant leaks',
        'Steering stability problems',
        'Oil leaks from various seals'
      ],
      description: 'The Jeep Wrangler is an iconic off-road vehicle known for its rugged capability and distinctive styling. Its modular design allows for extensive customization and easy parts replacement.'
    },
    'grand-cherokee': {
      name: 'Grand Cherokee',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Block', 'Automatic Transmission', '4x4 System',
        'Air Suspension', 'LED Headlights', 'Dashboard',
        'Control Arms', 'Power Steering Pump', 'Brake System', 'Alternator'
      ],
      commonIssues: [
        'Air suspension failures',
        'Electrical system problems',
        'Transmission shifting issues',
        'Engine cooling system leaks',
        'Power steering pump failures'
      ],
      description: 'The Jeep Grand Cherokee combines luxury with off-road capability. Known for its comfortable ride, advanced technology, and powerful engine options.'
    },
    'cherokee': {
      name: 'Cherokee',
      yearRange: '2000-2024',
      popularParts: [
        'Engine Assembly', 'Transmission', '4WD Components',
        'LED Headlights', 'Tailgate', 'Front Bumper',
        'Suspension Parts', 'Navigation Unit', 'Climate Control', 'Radiator'
      ],
      commonIssues: [
        '9-speed transmission problems',
        'Engine stalling issues',
        'Oil consumption',
        'Electrical system glitches',
        'Power liftgate malfunctions'
      ],
      description: 'The Jeep Cherokee offers a balance of on-road comfort and off-road capability. It features modern technology while maintaining Jeep\'s traditional ruggedness.'
    },
    'compass': {
      name: 'Compass',
      yearRange: '2007-2024',
      popularParts: [
        'Engine', 'CVT Transmission', '4x4 System Components',
        'Headlight Assemblies', 'Interior Trim', 'Door Panels',
        'Suspension Parts', 'Brake Components', 'Steering Rack', 'AC System'
      ],
      commonIssues: [
        'CVT transmission problems',
        'Electrical system failures',
        'AC system issues',
        'Power steering malfunctions',
        'Oil consumption in some models'
      ],
      description: 'The Jeep Compass is a compact SUV that offers Jeep capability in a smaller package. It combines urban practicality with light off-road ability.'
    },
    'renegade': {
      name: 'Renegade',
      yearRange: '2015-2024',
      popularParts: [
        'Engine Components', '9-Speed Transmission', '4WD System',
        'LED Lighting', 'My Sky Sunroof', 'Interior Parts',
        'Suspension System', 'Brake Components', 'Cooling System', 'Electronics'
      ],
      commonIssues: [
        'Transmission shifting problems',
        'My Sky roof leaks',
        'Engine stop-start system issues',
        'Electrical problems',
        'AC system failures'
      ],
      description: 'The Jeep Renegade is a subcompact SUV that brings Jeep styling and capability to the small SUV segment. Known for its unique design and surprising off-road ability.'
    }
  }
};