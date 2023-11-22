import { Request, Response } from 'express';
import CategoryModel from '../models/categoriesModel';

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    const category = await CategoryModel.findOne({ id: categoryId });
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
    const categories = await CategoryModel.find();
    res.status(200).json({
      status: 'success',
      data: { categories },
    });
  } catch (err) {
    throw err;
  }
};

export { getCategoryById, getAllCategories };
