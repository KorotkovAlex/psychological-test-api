import express from 'express';
import { connection } from '../../db';

const app = express();

app.post('/', (req, res) => {
  connection.query('SELECT * from users', (error, results) => {
    if (error) {
      throw error;
    }

    res.json({
      users: results
    });
  });
});

export default app;
