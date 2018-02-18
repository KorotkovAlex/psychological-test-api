import request from 'supertest';
import { app } from '../../app';


describe('request to api', () => {
  test('returns users', () => {
    const questions = {
      questions: [{
        description: 'Answer oen first question',
        id_question: 1,
        id_test: 1,
        index: 1,
        title: 'Where you life'
      }]
    };

    return request(app)
      .post('/questions')
      .then(response => {
        expect(response.body).toEqual(questions);
      });
  });
});
