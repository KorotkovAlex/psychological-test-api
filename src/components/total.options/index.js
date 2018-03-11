import express from 'express';
import { connection } from '../../db';

const app = express();

app.post('/', (req, res) => {
    const { id_tests } = req.body;

    connection.query(`select from_values, to_values, description, title from total_options where id_tests=${id_tests}`, (error, results) => {
        if (error) {
            throw error;
        }

        res.json({
            total_options: results
        });
    });
});

export default app;