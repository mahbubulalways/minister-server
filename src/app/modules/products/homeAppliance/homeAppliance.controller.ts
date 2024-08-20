import httpStatus from 'http-status';
import { AppError } from '../../../errors/AppError';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import {
  getAllHomeApplianceFromDB,
  getCategoryHomeApplianceCareFromDB,
  getSingleHomeApplianceFromDB,
  insertHomeApplianceIntoDB,
} from './homeAppliance.services';

//* insert HomeAppliance
const insertHomeApplianceController = catchAsync(async (req, res, next) => {
  const body = req.body;
  const product = body.product;
  const specification = body.specifications;
  const result = await insertHomeApplianceIntoDB(product, specification);
  if (result) {
    return sendResponse(res, {
      success: true,
      message: 'HomeAppliance Inserted Successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  }
});
//

//*  Get HomeAppliance product without specification
const getAllHomeApplianceController = catchAsync(async (req, res) => {
  const products = await getAllHomeApplianceFromDB();
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

//*  Get category HomeAppliance product without specification
const getAllCategoryHomeApplianceController = catchAsync(async (req, res) => {
  const category = req.params.category;
  const products = await getCategoryHomeApplianceCareFromDB(category);
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

//* get details of HomeAppliance by _id
const getSingleHomeApplianceController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await getSingleHomeApplianceFromDB(id);
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

export const homeApplianceController = {
  insertHomeApplianceController,
  getAllHomeApplianceController,
  getAllCategoryHomeApplianceController,
  getSingleHomeApplianceController,
};
