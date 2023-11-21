import supertest from 'supertest';
import { app } from '../src/index';

const request = supertest(app);

describe('GET /api/v1', () => {
  it('should respond with 200 with OK', async () => {
    const response = await request.get('/api/v1/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'success' });
  });
});
