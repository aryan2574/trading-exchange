import express from "express";
import bodyParser from "body-parser";
import balanceRoutes from "./routes/balanceRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/balance", balanceRoutes); // Balance Routes
app.use("/order", orderRoutes); // Order Routes

// Fallback route for undefined paths
app.use((req: express.Request, res: express.Response) => {
  res.status(404).send("Resource not found");

  return;
});

export default app;
