import request from 'supertest';
import { app } from '../../app';

describe('request to api', () => {
  test('returns users by mail', () => {
    const body = {
      mail: 'dv@.com',
      password: '1234567',
      first_name: 'Vladislav',
      last_name: 'Davidenko',
      city: 'Vladimir'
    };

    // return request(app)
    //   .post('/users/update')
    //   .send(body)
    //   .then(response => {
    //     expect(response.body).toEqual('UPDATE');
    //   });
  });
});
