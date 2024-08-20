import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { insertNewUserIntoDB } from './users.services';
import { AppError } from '../../errors/AppError';

const insertNewUserController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await insertNewUserIntoDB(body);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User not created.');
  } else {
    return sendResponse(res, {
      success: true,
      message: 'Create account successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  }
});

export const userController = {
  insertNewUserController,
};
