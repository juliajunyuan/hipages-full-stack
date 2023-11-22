import mongoose, { Schema, model } from 'mongoose';

type Suburb = mongoose.Document & {
  id: Number;
  name: String;
  postcode: String;
};

const suburbSchema = new Schema<Suburb>({
  id: { type: Number, required: true, unique: true },
  name: {
    type: String,
    required: [true, 'Suburb must have a name'],
    unique: true,
  },
  postcode: { type: String, required: [true, 'Suburb must have postcode'] },
});

const SuburbModel = model<Suburb>('Suburb', suburbSchema);
export default SuburbModel;
