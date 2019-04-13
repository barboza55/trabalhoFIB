/**
 *  Carrega o servidor
 */

const http = require('http');
const app = require('./src/app');
const port = 3002;
const server = http.createServer(app);
server.listen(port);
