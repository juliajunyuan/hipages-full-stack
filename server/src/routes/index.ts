import express, { Router } from 'express';
import cors from 'cors';
import suburbRouter from './suburbRoutes';
import jobsRouter from './jobsRoutes';
import categoriesRouter from './categoriesRoutes';

const router: Router = express.Router({});

router.use('/suburbs', cors(), suburbRouter);
router.use('/jobs', cors(), jobsRouter);
router.use('/categories', cors(), categoriesRouter);
router.get('/health', cors(), (req, res) => {
  res.json({
    status: 'success',
  });
});

export default router;
