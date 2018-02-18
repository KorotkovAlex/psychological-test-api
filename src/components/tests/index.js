import express from 'express';
import { connection } from '../../db';

const app = express();

app.post('/', (req, res) => {
  connection.query('SELECT * from tests', (error, results) => {
    if (error) {
      throw error;
    }

    res.json({
      tests: results
    });
  });
});

export default app;
