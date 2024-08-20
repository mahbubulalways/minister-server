import { Request, Response } from 'express';
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    error: true,
    message: 'Page not found',
  });
};
export default notFound;
