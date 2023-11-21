import { Request, Response } from 'express';
import { JobModel } from '../models/jobModel';
import { getJobById } from '../services/job';
const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await JobModel.find();
    res.status(200).json({
      status: 'success',
      data: { jobs },
    });
  } catch (err) {}
};

const updateJobById = async (req: Request, res: Response) => {
  const { status: newStatus, id: jobId } = req.body;
  try {
    const job = await getJobById(jobId);
    console.log("🚀 ~ file: jobController.ts:18 ~ updateJobById ~ job:", job)
    // TODO: add validation according to business logic before updating data
    // check if job exists
    if (!job) {
      return res.status(400).send({
        status: 'error',
        message: `Job with ${jobId} does not exist`,
      });
    }
    // check if allow status update
    if (job && job.status === 'declined' && newStatus === 'accepted') {
      return res.status(400).send({
        status: 'error',
        message: 'Job already been declined!',
      });
    }
    job.status = newStatus;
    await job.save();
    res.status(201).send({
      status: 'success',
      data: { job },
    })
  } catch (err) {
    throw err;
  }
};

export { getAllJobs, updateJobById };