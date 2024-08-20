import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

const port = config.PORT;
const mongodb_url = config.DATABASE_URI;
async function main() {
  try {
    await mongoose.connect(mongodb_url as string);
    app.listen(port, () => {
      console.log(`App is listening port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
