const express = require('express');
const router = express.Router();
//
const IndexController = require('../controller/IndexController');

router
    //login
    .get("/", IndexController.getIndex)
    .get("/login", IndexController.getLogin)
    .get("/registro", IndexController.getRegistre)

module.exports = router;