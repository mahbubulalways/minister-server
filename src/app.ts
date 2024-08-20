import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import applicationRoutes from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/errors/notFound';
const app: Application = express();
// middle ware
app.use(express.json());
app.use(cors());

app.use('/api/v1', applicationRoutes);
app.get('/', (req: Request, res: Response) => {
  res.json('Hello, I am from Minister Group server ');
});

app.use(globalErrorHandler);
app.use('*', notFound);
export default app;
