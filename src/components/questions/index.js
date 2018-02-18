import express from 'express';
import { connection } from '../../db';

const app = express();

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
