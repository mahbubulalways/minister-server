import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  DATABASE_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
  BCRYPT_SALT: process.env.BCRYPT_SALT,
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
  EXPIRE_IN: process.env.EXPIRE_IN,
  EMAIL_HOST: process.env.MAILTRAP_HOST,
  EMAIL_PORT: process.env.MAILTRAP_PORT,
  EMAIL_USERNAME: process.env.MAILTRAP_USERNAME,
  EMAIL_PASSWORD: process.env.MAILTRAP_PASSWORD,
};
