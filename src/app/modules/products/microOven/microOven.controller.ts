import httpStatus from 'http-status';
import { AppError } from '../../../errors/AppError';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import {
  getAllMicroOvenFromDB,
  getSingleMicroOvenFromDB,
  insertMicroOvenIntoDB,
} from './microOven.services';

//* insert oven
const insertMicroOvenController = catchAsync(async (req, res, next) => {
  const body = req.body;
  const product = body.product;
  const specification = body.specifications;
  const microOven = await insertMicroOvenIntoDB(product, specification);
  if (microOven) {
    return sendResponse(res, {
      success: true,
      message: 'microOven Inserted Successfully',
      statusCode: httpStatus.OK,
      data: microOven,
    });
  }
});
//

//*  Get oven product without specification
const getAllOvenController = catchAsync(async (req, res) => {
  const query = req.query;
  const products = await getAllMicroOvenFromDB(query);
  if (!products.length) {
    throw new AppError(httpStatus.NOT_FOUND, 'Products not found!!!');
  } else {
    sendResponse(res, {
      success: true,
      message: 'Products found successfully!!!',
      statusCode: httpStatus.OK,
      data: products,
    });
  }
});
//

//* get details of oven by _id
const getSingleMicroOvenController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await getSingleMicroOvenFromDB(id);
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
//

export const microOvenController = {
  insertMicroOvenController,
  getAllOvenController,
  getSingleMicroOvenController,
};
