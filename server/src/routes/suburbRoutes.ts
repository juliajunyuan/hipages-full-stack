import express from 'express';
import { getSuburb } from '../controllers/suburbsController';
const router: express.Router = express.Router();

router.get('/:id', getSuburb);

export default router;