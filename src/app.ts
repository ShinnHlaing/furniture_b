import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import { limiter } from "./middlewares/rateLimiter";
export const app = express();
app
  .use(morgan("dev"))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors()) //cross origin resouce sharing
  .use(helmet()) //for browser security
  .use(compression()) //zip the respond bodies for more faster respond
  .use(limiter);
//http://localhost:8080/health
app.get("/health", (req, res) => {
  res.status(200).json({ message: "hello we are ready for response." });
});
