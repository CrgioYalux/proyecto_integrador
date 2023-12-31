import http from 'http';

import { IS_FRESH_START } from './config/environment';

import db from './db';
import { createExpressApp } from './config/express';

const PORT = process.env.PORT ?? '4000';

(() => {
    db.pool.getConnection((err, connection) => {
        if (err) {
            console.log(`Error while attempting connection to database: ${err}`);
            return;
        }
        db.business.setStarterConfig(connection, IS_FRESH_START)
        .then(() => connection.release());
    });

    const server = http.createServer(createExpressApp());

    server.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}/`);
    });
})();
