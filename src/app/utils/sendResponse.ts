import { Response } from 'express';

type TResponse<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const { data: resData, message, statusCode, success } = data;
  return res.status(statusCode).json({
    success,
    message,
    data: resData,
  });
};

export default sendResponse;
