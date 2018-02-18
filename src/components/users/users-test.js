import request from 'supertest';
import { app } from '../../app';


describe('request to api', () => {
  test('returns users', () => {
    const users = {
      users:
      [
        {
          mail: 'dv@mail.ru',
          birthday: '1997-01-18T21:00:00.000Z',
          sex: 0,
          first_name: 'davidenko',
          last_name: 'vladislav'
        }
      ]
    };

    return request(app)
      .post('/users')
      .then(response => {
        expect(response.body).toEqual(users);
      });
  });
});
