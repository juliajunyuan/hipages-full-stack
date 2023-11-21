import mongoose, { Schema, model } from 'mongoose';

type JobEntity = mongoose.Document & {
  id: Number;
  status: String;
  suburb_id: Number;
  category_id: Number;
  contact_name: String;
  contact_phone: String;
  contact_email: String;
  price: Number;
  description: String;
  created_at: Date;
  updated_at: Date;
}

const jobSchema = new Schema<JobEntity>({
  id: { type: Number, required: true, unique: true },
  status: { type: String, rerquired: true, default: 'new' },
  suburb_id: { type: Number, rerquired: true },
  category_id: { type: Number, rerquired: true },
  contact_name: { type: String, rerquired: true },
  contact_phone: { type: String, rerquired: true },
  contact_email: { type: String, rerquired: true },
  price: { type: String, rerquired: true },
  description: { type: String, rerquired: true },
  created_at: { type: Date },
  updated_at: { type: Date },
});

const JobModel = model<JobEntity>('Job', jobSchema);

export { JobEntity, JobModel };
