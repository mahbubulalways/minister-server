import mongoose, { Schema } from 'mongoose';
import { IProductBasicInfo } from './products.interface';

const productBasicInfoSchema = new mongoose.Schema<IProductBasicInfo>(
  {
    name: { type: String, required: true, message: 'Product name is required' },
    images: {
      type: [String],
      required: true,
      message: 'At least one image is required',
    },
    image: {
      type: String,
      required: true,
      message: 'Primary image is required',
    },
    price: {
      type: Number,
      required: true,
      message: 'Product price is required',
    },
    discount: {
      type: Number,
      required: true,
      message: 'Discount value is required',
    },
    offerPrice: {
      type: Number,
      required: true,
      message: 'Offer price is required',
    },
    mainCategory: {
      type: String,
      required: true,
      message: 'Main category is required',
    },
    subCategory: {
      type: String,
      required: true,
      message: 'Subcategory is required',
    },
    availability: {
      type: String,
      required: true,
      message: 'Availability status is required',
    },
    size: {
      type: String,
      required: false,
    },
    productType: {
      type: String,
      required: true,
      message: 'Product type is required',
    },
    capacity: { type: String, message: 'Capacity is optional' },
    sale: { type: Boolean, default: false, message: 'Sale status is optional' },
    isDeleted: {
      type: Boolean,
      default: false,
      message: 'Deletion status is optional',
    },
    rating: { type: Number, default: 0, message: 'Rating is optional' },
    selling: { type: Number, default: 0, message: 'Selling count is optional' },
    specifications: {
      type: Schema.Types.ObjectId,
      ref: 'Specification',
    },
  },
  { timestamps: true },
);

const Products = mongoose.model<IProductBasicInfo>(
  'Products',
  productBasicInfoSchema,
);

export default Products;
