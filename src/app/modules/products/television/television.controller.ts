import httpStatus from 'http-status';
import { AppError } from '../../../errors/AppError';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import {
  getDingleTelevisionFromDB,
  getLedTelevisionFromDB,
  getSmartLedTelevisionFromDB,
  getTelevisionFromDB,
  insertTelevisionIntoDB,
} from './television.services';

// insert television
const insertTelevisionController = catchAsync(async (req, res, next) => {
  const body = req.body;
  const product = body.product;
  const specification = body.specifications;
  const television = await insertTelevisionIntoDB(product, specification);
  if (television) {
    sendResponse(res, {
      success: true,
      message: 'Television Inserted Successfully',
      statusCode: httpStatus.OK,
      data: television,
    });
  }
});

//  Get televisions product without specification
const getTelevisionController = catchAsync(async (req, res) => {
  const query = req.query;
  const products = await getTelevisionFromDB(query);
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

// get details of television by _id
const getSingleTelevisionController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await getDingleTelevisionFromDB(id);
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

// get led  television
const getLedTelevisionController = catchAsync(async (req, res) => {
  const query = req.query;
  const product = await getLedTelevisionFromDB(query);
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

// get smart led  television
const getSmartLedTelevisionController = catchAsync(async (req, res) => {
  const query = req.query;
  const product = await getSmartLedTelevisionFromDB(query);
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

export const televisionController = {
  insertTelevisionController,
  getTelevisionController,
  getSingleTelevisionController,
  getLedTelevisionController,
  getSmartLedTelevisionController,
};
