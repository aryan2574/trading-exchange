import express from "express";
import { placeOrder, getDepth } from "../controllers/orderController";

const router = express.Router();

// Order routes
router.post("/", placeOrder); // Handles buy/sell orders
router.get("/depth", getDepth); // Fetch market depth

export default router;
