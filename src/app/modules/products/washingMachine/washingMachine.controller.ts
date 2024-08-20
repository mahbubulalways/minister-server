import httpStatus from 'http-status';
import { AppError } from '../../../errors/AppError';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import {
  getFrontLoadWashingMachineFromDB,
  getSingleWashingMachineFromDB,
  getTopLoadWashingMachineFromDB,
  getWashingMachineFromDB,
  insertWashingMachineIntoDB,
} from './washingMachine.services';

//* insert washingMachine
const insertWashingMachineController = catchAsync(async (req, res, next) => {
  const body = req.body;
  const product = body.product;
  const specification = body.specifications;
  const washingMachine = await insertWashingMachineIntoDB(
    product,
    specification,
  );
  if (washingMachine) {
    sendResponse(res, {
      success: true,
      message: 'washingMachine Inserted Successfully',
      statusCode: httpStatus.OK,
      data: washingMachine,
    });
  }
});
//

//*  Get washingMachines product without specification
const getWashingMachineController = catchAsync(async (req, res) => {
  const query = req.query;
  const products = await getWashingMachineFromDB(query);
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

//* get details of washingMachine by _id
const getSingleWashingMachineController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await getSingleWashingMachineFromDB(id);
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

//* get automatic-top-load  washingMachine
const getTopLoadWashingMachineController = catchAsync(async (req, res) => {
  const query = req.query;
  const product = await getTopLoadWashingMachineFromDB(query);
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

//* get automatic-front-load  washingMachine
const getFrontLoadWashingMachineController = catchAsync(async (req, res) => {
  const query = req.query;
  const product = await getFrontLoadWashingMachineFromDB(query);
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

export const washingMachineController = {
  insertWashingMachineController,
  getWashingMachineController,
  getSingleWashingMachineController,
  getFrontLoadWashingMachineController,
  getTopLoadWashingMachineController,
};
