import type { NextFunction, Request, Response } from "express";

export async function SigninCcontroller(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  console.log("user send req to the signin Controller");
  try {
    //call the service layer
  } catch (error) {}
}
