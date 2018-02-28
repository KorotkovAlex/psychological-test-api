import mysql from 'mysql';

export const connection = mysql.createConnection({
  host: 'pri114.cmhwdist1pdi.us-east-1.rds.amazonaws.com',
  port: '3306',
  user: 'pri114',
  password: 'bbvjw;g6Sc',
  database: 'pri114'
});

connection.connect();
