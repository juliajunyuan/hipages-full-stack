import express from 'express';
import {
  getCategoryById,
  getAllCategories,
} from '../controllers/categoriesController';
const router: express.Router = express.Router();

router.get('/:id', getCategoryById);
router.get('/', getAllCategories);

export default router;
