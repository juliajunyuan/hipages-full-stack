import mongoose, { Schema, model } from 'mongoose';

type CategoryEntity = mongoose.Document & {
  id: Number;
  name: String;
  patent_category_id: Number;
};

const categorySchema = new Schema<CategoryEntity>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  patent_category_id: { type: Number },
});

const CategoryModel = model<CategoryEntity>('Category', categorySchema);

export default CategoryModel;
