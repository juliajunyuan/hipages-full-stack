import express, { Express, Request, Response } from 'express';
import router from './routes';

const app: Express = express();
app.use(express.json());
app.use('/api/v1/', router);

export default app;
