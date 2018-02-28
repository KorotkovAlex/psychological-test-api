import express from 'express';
import { connection } from '../../db';

const app = express();

app.post('/', (req, res) => {
  connection.query('SELECT * from answers', (error, results) => {
    if (error) {
      throw error;
    }

    res.json({
      answers: results
    });
  });
});

export default app;
