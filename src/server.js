import { app } from './app';

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  res.send('Hello//');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

