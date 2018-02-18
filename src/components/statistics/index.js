import express from 'express';
import { connection } from '../../db';

const app = express();

app.post('/', (req, res) => {
  connection.query('SELECT * from statistics', (error, results) => {
    if (error) {
      throw error;
    }

    res.json({
      statistics: results
    });
  });
});

export default app;
