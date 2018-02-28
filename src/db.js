import mysql from 'mysql';

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb'
});

connection.connect();
