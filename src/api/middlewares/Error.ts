import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res
    .status(err.status || 500)
    .json({ success: false, error: err.message });

  next(err);
};

export { errorHandler };
