const request = require('supertest');
const app = require('../app');

describe('GET Questions Endpoint', () => {
  test('should respond with a 200 status code for a product in the database', async () => {
    const res = await request(app)
      .get('/qa/questions')
      .query({ product_id: 1 });
    expect(res.statusCode).toBe(200);
  });
  test('should specify json in the content type headers for a product in the database', async () => {
    const res = await request(app)
      .get('/qa/questions')
      .query({ product_id: 1 });
    expect(res.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });
  test('response has product_id and results for a product in the database', async () => {
    const res = await request(app)
      .get('/qa/questions')
      .query({ product_id: 1 });
    expect(res.body['product_id']).toBeDefined();
    expect(res.body['results']).toBeDefined();
  });
  test('should respond with a 200 status code for a product not in the database', async () => {
    const res = await request(app)
      .get('/qa/questions')
      .query({ product_id: 0 });
    expect(res.statusCode).toBe(200);
  });
  test('should specify json in the content type headers for a product not in the database', async () => {
    const res = await request(app)
      .get('/qa/questions')
      .query({ product_id: 0 });
    expect(res.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });
  test('response has product_id and results for a product not in the database', async () => {
    const res = await request(app)
      .get('/qa/questions')
      .query({ product_id: 0 });
    expect(res.body['product_id']).toBeDefined();
    expect(res.body['results']).toHaveLength(0);
  });
});

describe('GET Answers Endpoint', () => {
  test('should respond with a 200 status code for a question in the database', async () => {
    const res = await request(app).get('/qa/questions/1/answers');
    expect(res.statusCode).toBe(200);
  });
  test('should specify json in the content type headers for a question in the database', async () => {
    const res = await request(app).get('/qa/questions/1/answers');
    expect(res.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });
  test('response has question_id and results for a question in the database', async () => {
    const res = await request(app).get('/qa/questions/1/answers');
    expect(res.body.question).toBeDefined();
    expect(res.body.results).toBeDefined();
  });
  test('should respond with a 200 status code for a question not in the database', async () => {
    const res = await request(app).get('/qa/questions/0/answers');
    expect(res.statusCode).toBe(200);
  });
  test('should specify json in the content type headers for a question not in the database', async () => {
    const res = await request(app).get('/qa/questions/0/answers');
    expect(res.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });
  test('response has product_id and results for a question not in the database', async () => {
    const res = await request(app).get('/qa/questions/0/answers');
    expect(res.body.question).toBeDefined();
    expect(res.body.results).toBeDefined();
  });
});
