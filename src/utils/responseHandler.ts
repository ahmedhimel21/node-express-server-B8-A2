import type { Response } from "express";

interface IResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
}

const responseHandler = <T>(
  res: Response,
  statusCode: number,
  payload: IResponse<T>,
) => {
  res.status(statusCode).json({
    success: payload.success,
    message: payload.message,
    data: payload.data || null,
    error: payload.error || null,
  });
};

export default responseHandler;
