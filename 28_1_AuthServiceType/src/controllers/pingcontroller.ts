import type { NextFunction, Request, Response } from "express";

export const handelPingController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const username: string = req.body.username;
  const password: string = req.body.password;
};
