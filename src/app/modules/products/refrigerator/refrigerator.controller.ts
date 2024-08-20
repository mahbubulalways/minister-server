import httpStatus from 'http-status';
import { AppError } from '../../../errors/AppError';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import {
  getDirectCoolRefrigeratorFromDB,
  getFreezerRefrigeratorFromDB,
  getNonFrostRefrigeratorFromDB,
  getRefrigeratorFromDB,
  getSingleRefrigeratorFromDB,
  insertRefrigeratorIntoDB,
} from './refrigerator.services';

//* insert Refrigerator
const insertRefrigeratorController = catchAsync(async (req, res, next) => {
  const body = req.body;
  const product = body.product;
  const specification = body.specifications;
  const refrigerator = await insertRefrigeratorIntoDB(product, specification);
  if (!refrigerator) {
    throw new AppError(httpStatus.NOT_FOUND, 'Products not inserted!!!');
  } else {
    sendResponse(res, {
      success: true,
      message: 'Refrigerator Inserted Successfully',
      statusCode: httpStatus.OK,
      data: refrigerator,
    });
  }
});
//

//*  Get Refrigerators product without specification and main category
const getRefrigeratorController = catchAsync(async (req, res) => {
  const query = req.query;
  const products = await getRefrigeratorFromDB(query);
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

//* get details of Refrigerator by _id
const getSingleRefrigeratorController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await getSingleRefrigeratorFromDB(id);
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

// * Get direct cool Refrigerators sub category
const getDirectCoolRefrigeratorController = catchAsync(async (req, res) => {
  const query = req.query;
  const products = await getDirectCoolRefrigeratorFromDB(query);
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

//* get non frost Refrigerators , sub category
const getNonFrostRefrigeratorController = catchAsync(async (req, res) => {
  const query = req.query;
  const products = await getNonFrostRefrigeratorFromDB(query);
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

//* get freezer Refrigerators , sub category
const getFreezerRefrigeratorController = catchAsync(async (req, res) => {
  const query = req.query;
  const products = await getFreezerRefrigeratorFromDB(query);
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

export const refrigeratorController = {
  insertRefrigeratorController,
  getRefrigeratorController,
  getSingleRefrigeratorController,
  getDirectCoolRefrigeratorController,
  getNonFrostRefrigeratorController,
  getFreezerRefrigeratorController,
};
