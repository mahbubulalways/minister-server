import mongoose from 'mongoose';
import { IUser, UserModel } from './users.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema<IUser, UserModel>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

//  static method
userSchema.statics.isUserExists = async function (params: string) {
  return await User.findOne({ email: params });
};

//  use virtual

userSchema.virtual('fullName').get(function () {
  return `${this?.firstName} ${this?.lastName}`;
});

// hashed password

userSchema.pre('save', async function () {
  const password = this.password;
  this.password = await bcrypt.hash(password, Number(config.BCRYPT_SALT));
});

// Create the model
const User = mongoose.model<IUser, UserModel>('User', userSchema);

export default User;
