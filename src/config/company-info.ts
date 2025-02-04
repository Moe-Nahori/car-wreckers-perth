export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  address: {
    street: string;
    suburb: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin?: string;
  };
  serviceArea: {
    mainLocations: string[];
    radius: string;
    center: {
      lat: number;
      lng: number;
    };
  };
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  abn: string;
}

export const companyInfo: CompanyInfo = {
  name: 'iCar Wrecker',
  phone: '0477 080 980',
  email: 'info@icarwreckers.com.au',
  website: 'https://icarwreckersperth.com.au',
  description: 'Perth\'s leading car wrecker and cash for cars service. We buy all types of vehicles in any condition across the Perth metropolitan area.',
  address: {
    street: '59 Helen Street',
    suburb: 'Bellevue',
    city: 'Perth',
    state: 'WA',
    postcode: '6056',
    country: 'Australia'
  },
  coordinates: {
    latitude: -31.9023,
    longitude: 116.0592
  },
  socialMedia: {
    facebook: 'https://facebook.com/icarwreckersperth',
    instagram: 'https://instagram.com/icarwreckersperth'
  },
  serviceArea: {
    mainLocations: [
      'Midland',
      'Bellevue',
      'Malaga',
      'Welshpool',
      'Osborne Park',
      'Cannington',
      'Joondalup',
      'Fremantle',
      'Rockingham'
    ],
    radius: '50km',
    center: {
      lat: -31.9523,
      lng: 115.8613
    }
  },
  openingHours: {
    monday: '7:00 AM - 7:00 PM',
    tuesday: '7:00 AM - 7:00 PM',
    wednesday: '7:00 AM - 7:00 PM',
    thursday: '7:00 AM - 7:00 PM',
    friday: '7:00 AM - 7:00 PM',
    saturday: '7:00 AM - 7:00 PM',
    sunday: '7:00 AM - 7:00 PM'
  },
  abn: '12 345 678 901'
};