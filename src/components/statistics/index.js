import express from 'express';
import { connection } from '../../db';

const app = express();

app.post('/own', (req, res) => {
  const { id_test, mail } = req.body;

  connection.query(`select statistics.date, statistics.count_time, statistics.number_point, ts.title as tstitle, ts.description, tests.title from statistics, total_options as ts, tests where statistics.id_test=${id_test} and statistics.mail='${mail}' and ts.id_tests = ${id_test} and  tests.id_tests = ${id_test} and ts.from_values <= statistics.number_point and ts.to_values >= statistics.number_point ORDER BY statistics.date DESC, statistics.count_time, statistics.number_point, tstitle, ts.description, tests.title`, (error, results) => {
    res.json({
      statistics: results
    });
  });
});

export default app;
