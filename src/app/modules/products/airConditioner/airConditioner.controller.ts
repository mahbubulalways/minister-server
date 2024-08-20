import httpStatus from 'http-status';
import { AppError } from '../../../errors/AppError';
import { catchAsync } from '../../../utils/catchAsync';
import {
  getAirConditionerFromDB,
  getCeilAirConditionerFromDB,
  getSingleAirConditionerFromDB,
  getSplitAirConditionerFromDB,
  insertAirConditionerIntoDB,
} from './airConditioner.services';
import sendResponse from '../../../utils/sendResponse';

//* insert ac
const insertAirConditionerController = catchAsync(async (req, res, next) => {
  const body = req.body;
  const product = body.product;
  const specification = body.specifications;
  const airConditioner = await insertAirConditionerIntoDB(
    product,
    specification,
  );
  if (airConditioner) {
    return sendResponse(res, {
      success: true,
      message: 'airConditioner Inserted Successfully',
      statusCode: httpStatus.OK,
      data: airConditioner,
    });
  }
});
//

//*  Get ac product without specification
const getAirConditionerController = catchAsync(async (req, res) => {
  const query = req.query;
  const products = await getAirConditionerFromDB(query);
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

//* get details of ac by _id
const getSingleAirConditionerController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await getSingleAirConditionerFromDB(id);
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

//*  Get split ac product with sub category
const getSplitAirConditionerController = catchAsync(async (req, res) => {
  const query = req.query;
  const products = await getSplitAirConditionerFromDB(query);
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

//*  Get ceiling ac product with sub category
const getCeilAirConditionerController = catchAsync(async (req, res) => {
  const query = req.query;
  const products = await getCeilAirConditionerFromDB(query);
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

export const airConditionerController = {
  insertAirConditionerController,
  getAirConditionerController,
  getSingleAirConditionerController,
  getSplitAirConditionerController,
  getCeilAirConditionerController,
};
