import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userLoginIntoDB } from './auth.services';

const userLoginController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await userLoginIntoDB(body);
  if (result) {
    return sendResponse(res, {
      success: true,
      message: 'Login successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  }
});

export const authController = {
  userLoginController,
};
