import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { addCartIntoDB, getCartFromDB } from './cart.services';

const addToCartController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await addCartIntoDB(body);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Something Went wrong');
  } else {
    return sendResponse(res, {
      success: true,
      message: 'Added to cart',
      statusCode: httpStatus.OK,
      data: result,
    });
  }
});
const getCartController = catchAsync(async (req, res) => {
  const email = req.params.email;
  const result = await getCartFromDB(email);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'No product found');
  } else {
    return sendResponse(res, {
      success: true,
      message: 'Get products successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  }
});
export const cartController = {
  addToCartController,
  getCartController,
};
