import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const message = error.message || 'Something went wrong';
  const statusCode = 500;

  type TErrorSources = {
    path: string;
    message: string;
  };
  const errorSources: TErrorSources = {
    path: '',
    message: 'Something went wrong',
  };
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
  });
};

export default globalErrorHandler;
