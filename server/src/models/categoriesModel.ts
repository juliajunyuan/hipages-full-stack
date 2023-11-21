
import mongoose, { Schema, model } from 'mongoose';

type JobEntity = mongoose.Document
interface ICategory {
  id: Number;
  name: String;
  patent_category_id: Number;
}

const categorySchema = new Schema<ICategory>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  patent_category_id: { type: Number },
});

const Category = model<ICategory>('Category', categorySchema);

export default Category;
