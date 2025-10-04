import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

export const app = express();
app
  .use(morgan("dev"))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors()) //cross origin resouce sharing
  .use(helmet()) //for browser security
  .use(compression()); //
