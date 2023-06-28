import http from 'http';
import { createServer } from './config/express';
import { connection, createTables } from './db/connection';

const PORT = process.env.PORT ?? '4000';

(() => {
    connection.connect(err => {
        if (err) {
            console.log(`Error while attempting connection to database: ${err}`);
            return;
        }
    });
    const app = createServer();
    const server = http.createServer(app);
    
    createTables();

    server.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}/`);
    });
})();
