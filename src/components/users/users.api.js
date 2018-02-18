import { connection } from '../../db';

export const getUsers = () => {
  const res = connection.query('SELECT * from users', (error, results) => {
    if (error) {
      throw error;
    }

    return results;
  });

  return res;
};
