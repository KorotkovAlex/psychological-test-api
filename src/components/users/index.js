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

app.post('/id', (req, res) => {
  connection.query(`select * from users where mail='${req.body.mail}'`, (error, results) => {
    if (error) {
      throw error;
    }

    console.log('req.body.mail', req.body);

    res.json({
      users: results
    });
  });
});

app.post('/logup', (req, res) => {
  const { mail, password, first_name, last_name, birthday, city, id_sex } = req.body;

  if (!mail || !first_name || !last_name || !birthday || !password || !city || !id_sex) {
    res.json({
      message: 'Have not all data',
      isLogup: false
    });
  }

  connection.query(`select * from users where mail='${mail}'`, (error, results) => {
    if (results.length === 1) {
      res.json({
        message: 'user is exist',
        isLogup: false
      });
    }
  });

  connection.query(`insert into users (mail, password, first_name, last_name, birthday, city, id_sexs) values ('${mail}', '${password}', '${first_name}', '${last_name}', '${birthday}', ${city}, ${id_sex})`, () => {
    res.json({
      message: 'user is logup',
      isLogup: true
    });
  });
});

app.post('/login', (req, res) => {
  connection.query(`select * from users where mail='${req.body.mail}' and password='${req.body.password}'`, (error, results) => {
    res.json({
      user: results
    });
  });
});


app.post('/sexs', (req, res) => {
  connection.query('select * from sexs', (error, results) => {
    res.json({
      sexs: results
    });
  });
});

export default app;
