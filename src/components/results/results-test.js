import request from 'supertest';
import { app } from '../../app';


describe('request to api', () => {
  test('inserts results', () => {
    const statistic = {
      id_test: 2,
      mail: 'programmerweb@yandex.ru',
      date: '1997.01.18',
      number_point: 3,
      count_time: 123
    };

    const results = [
      {
        id_answer: 13,
        id_question: 33
      }
    ];

    return request(app)
      .post('/results/add')
      .send({
        results,
        statistic
      })
      .then(response => {
        expect(response.body.results).toEqual(4);
      });
  });
});
