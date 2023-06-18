import http from 'http';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
    res.status(200).send('pong').end();
});

const PORT = process.env.PORT ?? 4000;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`);
});

