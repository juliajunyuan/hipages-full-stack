import express from 'express';
import { getSuburb, getAllSuburbs } from '../controllers/suburbsController';
const router: express.Router = express.Router();

router.get('/', getAllSuburbs);
router.get('/:id', getSuburb);

export default router;