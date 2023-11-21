import { Request, Response } from 'express';
import SuburbModel from '../models/suburbsModel';

const getSuburb = async (req: Request, res: Response) => {
  try {
    const suburbId = req.params.id;
    const suburb = await SuburbModel.findOne({ id: suburbId });
    res.status(200).json({
      status: 'success',
      data: { suburb },
    });
  } catch (err) {}
};

const getAllSuburbs = async (req: Request, res: Response) => {
  try {
    const suburbs = await SuburbModel.find();
    res.status(200).json({
      status: 'success',
      data: { suburbs },
    });
  } catch (err) {
    throw err;
  }
};

export { getSuburb, getAllSuburbs };
