import request from 'supertest';
import { app } from '../../app';

describe('request to api', () => {
  test('returns users by mail', () => {
    const users = {
      users:
      [
        {
          mail: 'programmerweb@yandex.ru',
          password: '1',
          birthday: '1997-01-18T21:00:00.000Z',
          id_sexs: 1,
          first_name: 'Alex',
          last_name: 'Korotkov',
          city: 'Мурманск'
        }
      ]
    };

    return request(app)
      .post('/users/id')
      .send({ mail: 'programmerweb@yandex.ru' })
      .then(response => {
        expect(response.body).toEqual(users);
      });
  });

});
