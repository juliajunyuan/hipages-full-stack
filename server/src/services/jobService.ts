import { JobEntity, JobModel } from '../models/jobModel';

const getJobById = async (jobId: string): Promise<JobEntity> => {
  const job = await JobModel.findOne({ id: jobId });
  return job;
};

export { getJobById };
