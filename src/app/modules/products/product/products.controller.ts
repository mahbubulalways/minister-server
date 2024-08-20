import httpStatus from 'http-status';
import { AppError } from '../../../errors/AppError';
import { catchAsync } from '../../../utils/catchAsync';
import {
  getAllProductsFromDB,
  getCategoryProductsFromDB,
  getSingleProductFromDB,
} from './products.services';
import sendResponse from '../../../utils/sendResponse';

const getSingleProductController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await getSingleProductFromDB(id);
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Products not found!!!');
  } else {
    sendResponse(res, {
      success: true,
      message: 'Products found successfully!!!',
      statusCode: httpStatus.OK,
      data: product,
    });
  }
});
const getAllProductController = catchAsync(async (req, res) => {
  const product = await getAllProductsFromDB();
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Products not found!!!');
  } else {
    sendResponse(res, {
      success: true,
      message: 'Products found successfully!!!',
      statusCode: httpStatus.OK,
      data: product,
    });
  }
});
const getProductByCategoryController = catchAsync(async (req, res) => {
  const category = req.params.category;
  const product = await getCategoryProductsFromDB(category);
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Products not found!!!');
  } else {
    sendResponse(res, {
      success: true,
      message: 'Products found successfully!!!',
      statusCode: httpStatus.OK,
      data: product,
    });
  }
});

export const productController = {
  getSingleProductController,
  getAllProductController,
  getProductByCategoryController,
};
