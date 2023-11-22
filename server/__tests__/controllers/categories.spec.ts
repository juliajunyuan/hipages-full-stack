import supertest from 'supertest';
import CategoryModel from '../../src/models/categoriesModel';
import fakeCategories from '../__mocks__/mockCategories.json';
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

describe('GET /api/v1/categories', () => {
  it('should return all jobs with 200 with OK', async () => {
    mockingoose(CategoryModel).toReturn(fakeCategories, 'find');
    const response = await request
      .get('/api/v1/categories')
      .set('X-Requested-With', 'XMLHttpRequest');
    expect(response.statusCode).toBe(200);
    expect(response.body.data.categories[0]._id).toBeTruthy();
    expect(response.body.data.categories[0].name).toEqual('category_test');
    expect(response.body.data.categories.length).toBe(2);
  });
});

describe('GET /api/v1/categories/:id', () => {
    it('should return all jobs with 200 with OK', async () => {
      mockingoose(CategoryModel).toReturn(fakeCategories[0], 'findOne');
      const id = fakeCategories[0].id;
      const response = await request
        .get(`/api/v1/categories/${id}`)
        .set('X-Requested-With', 'XMLHttpRequest');
      expect(response.statusCode).toBe(200);
      expect(response.body.data.category._id).toBeTruthy();
      expect(response.body.data.category.name).toEqual('category_test');
    });
  });
