import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
export const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
