import { Request, Response, NextFunction } from "express";
interface CustomRequest extends Request {
  userId?: number;
}
export const check = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  // const error: any = new Error("Token has expired");
  // error.status = 401;
  // error.code = "Error_Token_Expired";
  // return next(error); //must add return error to stop further execution

  req.userId = 123;
  next();
};
