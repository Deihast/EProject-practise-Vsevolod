import express from 'express';
import http from 'http';
import generalRoutes from './routes/general.js';
import config from './config/config.json' assert {type: "json"};

const app = express();
app.get('/', (req, res) => {
    return res.status(200).send('Welcome! ' + new Date().toLocaleDateString());
})

app.use('/', generalRoutes);

const server = http.createServer(app);

server.listen({ port: config.port }, () => {
    console.log(`Server is listening on port ${config.port}`);
})
