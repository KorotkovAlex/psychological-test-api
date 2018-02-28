import request from 'supertest';
import { app } from '../../app';


describe('request to api', () => {
  test('returns users', () => {
    const statistics = {
      id_test: 'dasas',
      mail: 'programmerweb@yandex.ru'
    };

    return request(app)
      .post('/statistics/own')
      .send(statistics)
      .then(response => {
        expect(response.body).toEqual({});
      })
  });
  //
  // test('returns statistics by id', () => {
  //   const statistics = {
  //     statistics: [{
  //       date: '2018-02-14T21:00:00.000Z',
  //       id_statistics: 1,
  //       id_test: 1,
  //       mail: 'dv@mail.ru',
  //       number_point: 51
  //     }]
  //   };
  //
  //   return request(app)
  //     .post('/statistics/id')
  //     .send({ id_statistics: 1 })
  //     .then(response => {
  //       expect(response.body).toEqual(statistics);
  //     });
  // });
});
