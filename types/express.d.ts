import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload; // Adjust based on the decoded token structure
    }
  }
}
