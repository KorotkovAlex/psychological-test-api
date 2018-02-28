import express from 'express';
import { connection } from '../../db';

const app = express();

app.post('/', (req, res) => {
  connection.query('SELECT * from tests', (error, results) => {
    res.json({
      tests: results
    });
  });
});

app.post('/id', (req, res) => {
  connection.query(`select * from tests where id_tests='${req.body.id_test}'`, (error, results) => {
    res.json({
      tests: results
    });
  });
});

export default app;
