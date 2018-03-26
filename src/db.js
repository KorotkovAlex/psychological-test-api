import mysql from 'mysql';

export const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'pri114',
  password: 'bbvjw;g6Sc',
  database: 'pri114'
});

connection.connect();
