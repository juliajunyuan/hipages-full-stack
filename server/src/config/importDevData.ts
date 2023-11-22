import dotenv from 'dotenv';
import SuburbModel from '../models/suburbsModel';
import suburbs from './suburbs.json';
import CategoryModel from '../models/categoriesModel';
import categories from './categories.json';
import { JobModel} from '../models/jobModel';
import jobs from './jobs.json';

dotenv.config();

// import data into mongo db
export const importData = async () => {
  try {
    await JobModel.create({jobs});
    console.log('Data imported successfully!');
  } catch (err) {
    console.log(err);
  }
};
