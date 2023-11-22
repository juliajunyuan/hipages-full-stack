import supertest from 'supertest';
import { JobModel } from '../../src/models/jobModel';
import fakeJobs from '../__mocks__/mockJobs.json';
import app from '../../src/app';


import mongoose from 'mongoose';
const mockingoose = require('mockingoose');
const request = supertest(app);

beforeEach(() => {
  mockingoose.resetAll();
  jest.mock('mongoose',()=>{
    const connect = jest.fn().mockResolvedValue('ok');
    return connect;
  });
});

afterEach(()=>{
  jest.clearAllMocks();
})

describe('GET /api/v1/jobs', () => {
  it('should return all jobs with 200 with OK', async () => {
    mockingoose(JobModel).toReturn(fakeJobs, 'find');
    const response = await request
      .get('/api/v1/jobs')
      .set('X-Requested-With', 'XMLHttpRequest');
    expect(response.statusCode).toBe(200);
    expect(response.body.data.jobs[0]._id).toBeTruthy();
    expect(response.body.data.jobs[0].contact_name).toEqual('contact 1');
    expect(response.body.data.jobs.length).toBe(2);
  });
});
