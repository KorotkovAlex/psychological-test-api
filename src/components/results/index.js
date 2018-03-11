import express from 'express';
import { connection } from '../../db';

const app = express();

app.post('/', (req, res) => {
  connection.query('SELECT * from results', (error, results) => {
    if (error) {
      throw error;
    }

    res.json({
      answers: results
    });
  });
});

app.post('/add', (req, res) => {
  const { results, statistic } = req.body;

  connection.query(`insert into statistics (id_test, mail, date, number_point, count_time) values (${statistic.id_test}, '${statistic.mail}', '${statistic.date}', ${statistic.number_point}, ${statistic.count_time})`, (error, result) => {
    results.map(item => (
      connection.query(`insert into results (id_answer, id_question, mail, id_statistics) values (${item.id_answer}, ${item.id_question}, '${statistic.mail}', ${result.insertId})`)
    ));

    connection.query(`SELECT from_values, to_values, description, title from total_options where id_tests = ${statistic.id_test} and from_values <= ${statistic.number_point} and to_values >= ${statistic.number_point}`, (error, resTo) => {
      res.json({
        total_options: resTo,
        number_point: statistic.number_point
      });
    });
  });
});

app.post('/id', (req, res) => {
  connection.query(`SELECT * from results where mail = '${req.body.mail}' and id_test = ${req.body.id_test}`, (error, results) => {
    if (error) {
      throw error;
    }

    res.json({
      results
    });
  });
});

export default app;
