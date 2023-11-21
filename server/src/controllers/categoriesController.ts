import { Request, Response } from 'express';
import Category from '../models/categoriesModel';

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.find().where('id').equals(categoryId);
    res.status(200).json({
      status: 'success',
      data: { category },
    });
  } catch (err) {
    throw err;
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      status: 'success',
      data: { categories },
    });
  } catch (err) {
    throw err;
  }
};

export { getCategoryById, getAllCategories };
