const express = require('express');
const router = express.Router();
//
const loginController1 = require('../controller/IndexController');

router
    //login
    .get("/login", loginController1.getLogin);

module.exports = router;