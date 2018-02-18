import express from 'express';
import bodyParser from 'body-parser';

import users from './components/users';
import tests from './components/tests';
import questions from './components/questions';
import statistics from './components/statistics';


export const app = express();

app.use('/users', users);
app.use('/tests', tests);
app.use('/questions', questions);
app.use('/statistics', statistics);

app.use(bodyParser.json());
