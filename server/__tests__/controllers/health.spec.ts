import supertest from 'supertest';
import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../../src/app';

const config = {
  Memory: true,
  IP: '127.0.0.1',
  Port: '27017',
  Database: 'mongoDB',
};
const request = supertest(app);

describe('GET /api/v1', () => {
  it('should respond with 200 with OK', async () => {
    const response = await request.get('/api/v1/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'success' });
  });
});
