export interface Account {
  id: number;
  name: string;
  type: string;
  balance: number;
}

export const accounts: Account[] = [
  {
    id: 0,
    name: 'Savings',
    type: 'savings',
    balance: 1000000,
  },
  {
    id: 1,
    name: 'Checking',
    type: 'checking',
    balance: 500,
  },
  {
    id: 2,
    name: 'Credit Card',
    type: 'card',
    balance: 250,
  },
];
