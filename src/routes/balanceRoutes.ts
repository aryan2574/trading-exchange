import express from "express";
import { getBalances } from "../controllers/balanceController";

const router = express.Router();

router.get("/:userId", getBalances); // Fetch user balances

export default router;
