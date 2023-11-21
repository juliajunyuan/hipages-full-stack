import { Request, Response } from 'express';
import Suburb from '../models/suburbsModel';
const getSuburb = async (req: Request, res: Response) => {
    try {
        const suburbId = req.params.id;
        const suburb = await Suburb.find().where('id').equals(suburbId);
        res.status(200).json({
            status: 'success',
            data: { suburb }
        })
    } catch (err) {

    }
};


export { getSuburb };
