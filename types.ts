
export enum SubscriptionStatus {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  EXPIRED = 'expired',
  NONE = 'none'
}

export enum SaturationLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  subscriptionStatus: SubscriptionStatus;
  subscriptionStartDate?: string;
  planType?: 'Monthly';
}

export interface Product {
  id: string;
  name: string;
  image: string;
  niche: string;
  country: string;
  margin: number;
  platform: 'TikTok' | 'Facebook' | 'Both';
  supplierLink: string;
  sellingPrice: number;
  productCost: number;
  description: string;
  saturation: SaturationLevel;
  adExamples: string[];
  adAngles: string[];
  adScript: string;
  isNew?: boolean;
}

export interface CalculatorState {
  productCost: number;
  shippingCost: number;
  adCost: number;
  sellingPrice: number;
}
