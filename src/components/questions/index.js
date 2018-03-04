import express from 'express';
import { connection } from '../../db';

const app = express();

app.post('/id', (req, res) => {
  connection.query(`SELECT questions.id_question, questions.description,
    answers.id_answer, answers.title, answers.weight, answers.index_answer,
    qha.index_question from questions,
    questions_has_answers as qha, answers where id_test = ${req.body.id_test} and
    qha.id_question = questions.id_question and qha.id_answer = answers.id_answer
    ORDER BY questions.id_question, questions.description, qha.index_question, answers.index_answer,
    answers.id_answer, answers.title, answers.weight`, (error, results) => {
    if (error) {
      throw error;
    }

    res.json({
      questions: results
    });
  });
});

app.post('/', (req, res) => {
  connection.query('SELECT * from questions', (error, results) => {
    if (error) {
      throw error;
    }

    res.json({
      questions: results
    });
  });
});

export default app;
