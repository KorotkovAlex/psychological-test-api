import request from 'supertest';
import { app } from '../../app';


describe('request to api', () => {
  test('returns tests', () => {
    const tests = {
      tests: [{
        description: 'This is test ...',
        title: 'My family',
        id_group: 1,
        id_tests: 1
      }]
    };

    return request(app)
      .post('/tests')
      .then(response => {
        expect(response.body).toEqual(tests);
      });
  });

  test('returns tests by id', () => {
    const tests = {
      tests: [{
        description: 'This is test ...',
        title: 'My family',
        id_group: 1,
        id_tests: 1
      }]
    };

    return request(app)
      .post('/tests/id')
      .send({ id_test: 1 })
      .then(response => {
        expect(response.body).toEqual(tests);
      });
  });
});
