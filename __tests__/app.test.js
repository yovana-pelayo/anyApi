const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { coffee } = require('../data/coffee');

describe('coffee routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/coffee should return a list of coffee ', async () => {
    const res = await request(app).get('/coffee');
    const expected = coffee.map((cup) => {
      return { id: cup.id, name: cup.name };
    });

    expect(res.body).toEqual(expected);
  });
  it('/coffee/:id should return coffee detail ', async () => {
    const res = await request(app).get('/coffee/1');
    const mocha = {
      id: '1',
      name: 'Mocha',
      type: 'iced',
      money: 5,
    };
    expect(res.body).toEqual(mocha);
  });
  -coffee;
  app;
  afterAll(() => {
    pool.end();
  });
});
