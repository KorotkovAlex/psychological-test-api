import express from 'express';
import bodyParser from 'body-parser';

import users from './components/users';
import tests from './components/tests';
import questions from './components/questions';
import statistics from './components/statistics';
import results from './components/results';
import total_options from './components/total.options/index';

export const app = express();

app.use(bodyParser.json());

app.use('/users', users);
app.use('/tests', tests);
app.use('/questions', questions);
app.use('/statistics', statistics);
app.use('/results', results);
app.use('/totaloptions', total_options);
