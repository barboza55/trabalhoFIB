const usuario = require('../controllers/usuario');
const { Router } = require( 'express');
const router = Router();

//rotas de usuario:
router.post('/cadastrar', usuario.novoUsuario);
router.post('/login', usuario.login);
router.post('/alterar', usuario.alteraUsuario);
router.post('/deleta', usuario.deletaUsuario)

module.exports = router;