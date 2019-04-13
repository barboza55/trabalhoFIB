/**
 * Rotas e Serviços de API 
 */

const express = require('express');
const morgan = require('morgan');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');

// Variáveis
const app = express();

// Rotas do Usuário
const rotaUsuario = require('./routes/usuario');
const crossOrigin = require('./middleware/cross-origin');

// Conexão com o MongoDB
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(crossOrigin);

app.use(rotaUsuario);

app.use((req, res, next) => {
    const error = new Error('Pagina não encontrada!');
    error.status = 404;
    next(error);
});

app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;