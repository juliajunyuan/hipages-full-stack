import { getJobById } from '../../src/services/jobService';
import { JobModel } from '../../src/models/jobModel';
const mockingoose = require('mockingoose');
import fakeJobs from '../__mocks__/mockJobs.json';


describe('getJobById', () => {
    mockingoose(JobModel).toReturn(fakeJobs[1], 'findOne');
    it('should respond with 200 with correct job', async () => {
      const response = await getJobById('2');
      console.log("🚀 ~ file: jobServices.ts:11 ~ it ~ response:", response)
      
    });
  });