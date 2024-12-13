import { Request, Response } from "express";
import { users } from "../config/constants";
import { TICKER } from "../config/constants";

export const getBalances = (req: Request, res: Response): void => {
  const userId = req.params.userId;
  const user = users.find((x) => x.id === userId);

  if (!user) {
    res.json({
      USD: 0,
      [TICKER]: 0,
    });
    return;
  }

  res.json({
    balances: user.balances,
  });
};
