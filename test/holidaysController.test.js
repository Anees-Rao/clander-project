const request = require('supertest');
const app = require('../app');

describe('GET /holidays', () => {
  it('should return holidays for the specified country and year', async () => {
    const res = await request(app).get('/holidays?country=PK&year=2024');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});

describe('GET /countries', () => {
  it('should return a list of countries', async () => {
    const res = await request(app).get('/countries');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
