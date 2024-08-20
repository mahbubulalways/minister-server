import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { IUser } from './users.interface';
import User from './users.model';

export const insertNewUserIntoDB = async (payload: IUser) => {
  const isExist = await User.isUserExists(payload?.email);
  if (isExist) {
    throw new AppError(
      httpStatus.CONFLICT,
      'User with this email already exist.',
    );
  }
  const result = await User.create(payload);
  return result;
};
