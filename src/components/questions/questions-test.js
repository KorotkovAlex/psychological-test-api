import request from 'supertest';
import { app } from '../../app';


describe('request to api', () => {
  test('returns questions by id', () => {
    const questionsLength = 48;

    return request(app)
      .post('/questions/id')
      .send({ id_test: 2 })
      .then(response => {
        expect(response.body.questions.length).toEqual(questionsLength);
      });
  });
});
