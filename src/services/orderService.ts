import { users, TICKER, bids, asks } from "../config/constants";

export const fillOrders = (
  side: string,
  price: number,
  quantity: number,
  userId: string
): number => {
  let remainingQuantity = quantity;

  if (side === "bid") {
    for (let i = asks.length - 1; i >= 0; i--) {
      if (asks[i].price > price) continue;

      if (asks[i].quantity > remainingQuantity) {
        asks[i].quantity -= remainingQuantity;
        flipBalance(asks[i].userId, userId, remainingQuantity, price);
        return 0;
      } else {
        remainingQuantity -= asks[i].quantity;
        flipBalance(asks[i].userId, userId, asks[i].quantity, price);
        asks.pop();
      }
    }
  } else {
    for (let i = bids.length - 1; i >= 0; i--) {
      if (bids[i].price < price) continue;

      if (bids[i].quantity > remainingQuantity) {
        bids[i].quantity -= remainingQuantity;
        flipBalance(userId, bids[i].userId, remainingQuantity, price);
        return 0;
      } else {
        remainingQuantity -= bids[i].quantity;
        flipBalance(userId, bids[i].userId, bids[i].quantity, price);
        bids.pop();
      }
    }
  }
  return remainingQuantity;
};

const flipBalance = (
  userId1: string,
  userId2: string,
  quantity: number,
  price: number
) => {
  const user1 = users.find((u) => u.id === userId1);
  const user2 = users.find((u) => u.id === userId2);

  if (!user1 || !user2) return;

  user1.balances[TICKER] -= quantity;
  user2.balances[TICKER] += quantity;
  user1.balances["USD"] += quantity * price;
  user2.balances["USD"] -= quantity * price;
};
