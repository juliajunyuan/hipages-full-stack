import supertest from 'supertest';
import { app } from '../src/index';

const request = supertest(app);

afterEach(() => {
    jest.clearAllMocks();
});

describe('GET /api/v1/jobs', () => {
    it('should return all jobs with 200 with OK', async () => {
        const response = await request
            .get('/api/v1/jobs')
            .set('X-Requested-With', 'XMLHttpRequest')
        console.log("🚀 ~ file: jobController.spec.ts:15 ~ it ~ response:", response)

        expect(response.statusCode).toBe(200);
        expect(response.text).toEqual('OK');
    });
});
