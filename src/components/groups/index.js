import express from 'express';
import { connection } from '../../db';

const app = express();

app.post('/', (req, res) => {
  connection.query('SELECT * from groups', (error, results) => {
    if (error) {
      throw error;
    }

    res.json({
      groups: results
    });
  });
});

export default app;
