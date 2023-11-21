import { Schema, model } from 'mongoose';

interface ISuburb {
  id: Number;
  name: String;
  postcode: String;
}

const suburbSchema = new Schema<ISuburb>({
  id: { type: Number, required: true, unique: true },
  name: {
    type: String,
    required: [true, 'Suburb must have a name'],
    unique: true,
  },
  postcode: { type: String, required: [true, 'Suburb must have postcode'] },
});

const Suburb = model<ISuburb>('Suburb', suburbSchema);
export default Suburb;
