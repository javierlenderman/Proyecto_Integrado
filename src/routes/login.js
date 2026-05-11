const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router
    .get('/', loginController.getIndex)
    .get('/login', loginController.getLogin)
    .get('/registro', loginController.getRegistro)
    .get('/logout', loginController.logout)
    .post('/login', loginController.postLogin)
    .post('/register', loginController.postRegister);

module.exports = router;
