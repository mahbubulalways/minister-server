import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import User from '../users/users.model';
import { IAuth } from './auth.interface';
import { jwtHelpers } from './auth.utils';
import config from '../../config';
import bcrypt from 'bcrypt';
export const userLoginIntoDB = async (payload: IAuth) => {
  const findUser = await User.findOne({ email: payload?.email });
  if (!findUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User with this email not found.');
  }
  const password = findUser?.password;
  const matchPassword = await bcrypt.compare(payload.password, password);
  if (!matchPassword) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Email or password is wrong');
  }
  const tokenPayload = {
    email: findUser?.email,
    _id: findUser?._id,
    role: findUser?.role,
  };
  const token = jwtHelpers.createToken(
    tokenPayload,
    config.JWT_ACCESS_TOKEN as string,
    config.EXPIRE_IN as string,
  );
  const data = {
    token: token,
    data: {
      _id: findUser?._id,
      firstName: findUser?.firstName,
      last: findUser?.lastName,
      fullName: `${findUser?.firstName} ${findUser?.lastName}`,
      email: findUser?.email,
      mobileNumber: findUser?.mobileNumber,
      role: findUser?.role,
    },
  };
  return data;
};
