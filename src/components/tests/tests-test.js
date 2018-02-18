import request from 'supertest';
import { app } from '../../app';


describe('request to api', () => {
  test('returns users', () => {
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
});
