import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const register = [
  body("phone")
    .trim()
    .notEmpty()
    .matches(/^[0-9]+$/)
    .isLength({ min: 5, max: 12 }) //regex
    .withMessage("Invalid phone number"),

  async (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req).array({ onlyFirstError: true });
    if (error.length > 0) {
      //console.log({ error: error[0].msg });
      const err: any = new Error(error[0].msg);
      err.status = 400;
      err.code = "Error Invalids";
      return next(err);
    }
    res.status(200).json({ message: "register success" });
  },
];

export const verifyOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: "register" });
};

export const confirmPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: "register" });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: "register" });
};
