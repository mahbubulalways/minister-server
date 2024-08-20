import { Model } from 'mongoose';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  role: 'admin' | 'user';
}

export interface UserModel extends Model<IUser> {
  isUserExists(payload: string): Promise<IUser | null>;
}
