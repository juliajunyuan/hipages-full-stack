import express from 'express';
import { getAllJobs, updateJobById } from '../controllers/jobController';
const router: express.Router = express.Router();

router.get('/', getAllJobs);
router.post('/', updateJobById);


export default router;