import http from 'http';
import { createServer } from './config/express';
import { pool, createTables, createStoredProcedures } from './db/connection';

const PORT = process.env.PORT ?? '4000';

(() => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(`Error while attempting connection to database: ${err}`);
            return;
        }
        createTables(connection);
        createStoredProcedures(connection);
        connection.release();
    });

    const app = createServer();
    const server = http.createServer(app);

    server.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}/`);
    });
})();
