import http from 'http';
import { createServer } from './config/express';

const PORT = process.env.PORT ?? '4000';
const HOST = process.env.host ?? 'localhost';

(() => {
    const app = createServer();
    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}/`);
    });
})();
