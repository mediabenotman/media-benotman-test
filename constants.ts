
import { Product, SaturationLevel } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Portable Neck Fan Pro',
    image: 'https://images.unsplash.com/photo-1591123720164-de1348028a82?q=80&w=800&auto=format&fit=crop',
    niche: 'Summer / Gadgets',
    country: 'USA',
    margin: 65,
    platform: 'TikTok',
    supplierLink: 'https://aliexpress.com/item/1',
    sellingPrice: 39.99,
    productCost: 12.50,
    description: 'Bladeless portable neck fan with 4000mAh battery. Perfect for outdoor activities.',
    saturation: SaturationLevel.LOW,
    adExamples: ['https://tiktok.com/example1'],
    adAngles: ['Stay cool without hands', 'Perfect for theme parks', 'Quiet but powerful'],
    adScript: 'Ever felt like you are melting in the sun? Meet the Pro Neck Fan...',
    isNew: true
  },
  {
    id: '2',
    name: 'Self-Cleaning Hair Brush',
    image: 'https://images.unsplash.com/photo-1599426184804-5ec8f37f2015?q=80&w=800&auto=format&fit=crop',
    niche: 'Beauty',
    country: 'Global',
    margin: 55,
    platform: 'Both',
    supplierLink: 'https://aliexpress.com/item/2',
    sellingPrice: 24.99,
    productCost: 8.20,
    description: 'One-click cleaning mechanism. Removes all tangled hair instantly.',
    saturation: SaturationLevel.MEDIUM,
    adExamples: ['https://fb.com/example1'],
    adAngles: ['Stop spending 10 mins cleaning your brush', 'Satisfying hair removal'],
    adScript: 'Look how much hair is trapped here. Click, and it is gone!',
    isNew: false
  },
  {
    id: '3',
    name: 'Ergonomic Pet Grooming Glove',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop',
    niche: 'Pets',
    country: 'UK',
    margin: 70,
    platform: 'Facebook',
    supplierLink: 'https://aliexpress.com/item/3',
    sellingPrice: 19.99,
    productCost: 4.50,
    description: 'Soft silicone grooming tips that pets love. Removes loose hair easily.',
    saturation: SaturationLevel.LOW,
    adExamples: [],
    adAngles: ['Massage your pet while cleaning', 'No more fur on the couch'],
    adScript: 'Your cat hates brushes? Try this massage glove...',
    isNew: true
  }
];
