// Shared item definitions without secrets
export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

// Items data - shared between frontend and backend
export const ITEMS: Item[] = [
  {
    id: 'ice_cream',
    name: '10,000 PAWS 🐾',
    description: 'A delicious virtual ice cream',
    price: 100,
    icon: '🐾'
  },
  {
    id: 'cookie',
    name: 'Cookie 🍪',
    description: 'A sweet virtual cookie',
    price: 250,
    icon: '🍪'
  },
  {
    id: 'hamburger',
    name: 'Hamburger 🍔',
    description: 'A tasty virtual hamburger',
    price: 500,
    icon: '🍔'
  }
];

// Helper function to get item by ID
export function getItemById(id: string): Item | undefined {
  return ITEMS.find(item => item.id === id);
} 
