export interface Balances {
  [key: string]: number;
}

export interface User {
  id: string;
  balances: Balances;
}

export interface Order {
  userId: string;
  price: number;
  quantity: number;
}
