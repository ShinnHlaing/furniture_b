import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import { limiter } from "./middlewares/rateLimiter";
import healthRoutes from "./routes/v1/health";
import viewRoute from "./routes/web/view";
import { notFound } from "./controllers/web/errorController";
export const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app
  .use(morgan("dev"))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors()) //cross origin resouce sharing
  .use(helmet()) //for browser security
  .use(compression()) //zip the respond bodies for more faster respond
  .use(limiter);
app.use("/api/v1", healthRoutes);
//http://localhost:8080/api/v1/health (end point)
app.use(express.static("public")); //to link css files
app.use(viewRoute);
app.use(notFound);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || "Server Error";
  const errorCode = error.code || "Error Code";
  res.status(status).json({ message, error: errorCode });
});
