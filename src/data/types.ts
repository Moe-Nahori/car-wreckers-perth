export interface PriceRangeItem {
  condition: string;
  range: string;
  description: string;
}

export interface Issue {
  title: string;
  description: string;
  affectedYears: string[];
  repairDifficulty: 1 | 2 | 3 | 4 | 5;
  estimatedRepairCost: number;
}

export interface ValuedPart {
  name: string;
  averagePrice: number;
  condition: 'poor' | 'fair' | 'good';
  availability: 'high' | 'medium' | 'low';
  description: string;
}

export interface CompatibleModel {
  make: string;
  model: string;
  yearRange: string;
  compatibleParts: string[];
}

export interface PriceRange {
  poor: number;
  fair: number;
  good: number;
}

export interface CarModel {
  name: string;
  yearRange: string;
  popularParts: string[];
  priceRanges: PriceRangeItem[];
  highValueParts: ValuedPart[];
  compatibleModels?: CompatibleModel[];
  averageValue: PriceRange;
}

// Specific car make model types
export type SuzukiModelType = 'swift' | 'vitara' | 'jimny' | 'ignis' | 'baleno';

export interface SuzukiModel {
  name: string;
  yearRange: string;
  popularParts: string[];
  commonIssues: string[];
}

export interface SuzukiData {
  description: string;  // Added description property
  models: {
    [K in SuzukiModelType]: SuzukiModel;
  };
}

// Toyota specific types
export type ToyotaModelType = 'corolla' | 'camry' | 'hilux' | 'rav4' | 'landcruiser' | 'prado';

export interface ToyotaIssue {
  title: string;
  description: string;
}

export interface ToyotaModel {
  name: string;
  yearRange: string;
  popularParts: string[];
  commonIssues: ToyotaIssue[];
  priceRanges: PriceRangeItem[];
}

export interface ToyotaData {
  description: string;
  models: {
    [K in ToyotaModelType]: ToyotaModel;
  };
}

export interface CarMakeData {
  make: string;
  description: string;
  australianPresence: string;
  commonIssues: {
    [key: string]: Issue[];
  };
  models: {
    [key: string]: CarModel;
  };
}