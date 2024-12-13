import { User, Order } from "../models/data-model";

export const TICKER = "GOOGLE";

export const users: User[] = [
  { id: "1", balances: { USD: 1000, GOOGLE: 0 } },
  { id: "2", balances: { USD: 1000, GOOGLE: 0 } },
];

export const bids: Order[] = [];
export const asks: Order[] = [];
