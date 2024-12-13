import { Request, Response } from "express";
import { fillOrders } from "../services/orderService";
import { bids, asks } from "../config/constants";

export const placeOrder = (req: Request, res: Response) => {
  const side: string = req.body.side;
  const price: number = req.body.price;
  const quantity: number = req.body.quantity;
  const userId: string = req.body.userId;

  const remainingQuantity = fillOrders(side, price, quantity, userId);

  if (remainingQuantity === 0) {
    res.json({ filledQuantity: quantity });
    return;
  }

  if (side === "bid") {
    bids.push({
      userId,
      price,
      quantity: remainingQuantity,
    });
    bids.sort((a, b) => (a.price < b.price ? 1 : -1));
  } else {
    asks.push({
      userId,
      price,
      quantity: remainingQuantity,
    });
    asks.sort((a, b) => (a.price > b.price ? 1 : -1));
  }

  res.json({
    filledQuantity: quantity - remainingQuantity,
  });
};

export const getDepth = (req: Request, res: Response) => {
  const depth: {
    [price: string]: {
      type: "bid" | "ask";
      quantity: number;
    };
  } = {};

  for (let i = 0; i < bids.length; i++) {
    if (!depth[bids[i].price]) {
      depth[bids[i].price] = {
        quantity: bids[i].quantity,
        type: "bid",
      };
    } else {
      depth[bids[i].price].quantity += bids[i].quantity;
    }
  }

  for (let i = 0; i < asks.length; i++) {
    if (!depth[asks[i].price]) {
      depth[asks[i].price] = {
        quantity: asks[i].quantity,
        type: "ask",
      };
    } else {
      depth[asks[i].price].quantity += asks[i].quantity;
    }
  }

  res.json({
    depth,
  });
};
