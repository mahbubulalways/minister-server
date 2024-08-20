import httpStatus from 'http-status';
import { AppError } from '../../../errors/AppError';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import {
  getAllHumanCareFromDB,
  getSingleHumanCareFromDB,
  insertHumanCareIntoDB,
} from './humanCare.services';

//* insert HumanCare
const insertHumanCareController = catchAsync(async (req, res, next) => {
  const body = req.body;
  const product = body.product;
  const humanCare = await insertHumanCareIntoDB(product);
  if (humanCare) {
    return sendResponse(res, {
      success: true,
      message: 'HumanCare Inserted Successfully',
      statusCode: httpStatus.OK,
      data: humanCare,
    });
  }
});
//

//*  Get HumanCare product without specification
const getAllHumanCareController = catchAsync(async (req, res) => {
  const products = await getAllHumanCareFromDB();
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

//* get details of HumanCare by _id
const getSingleHumanCareController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await getSingleHumanCareFromDB(id);
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

export const humanCareController = {
  insertHumanCareController,
  getAllHumanCareController,
  getSingleHumanCareController,
};
