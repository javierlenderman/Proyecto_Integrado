const express = require('express');
const router = express.Router();

const IndexController = require('../controller/IndexController');

router
    .get("/", IndexController.getIndex)
    .get("/login", IndexController.getLogin)
    .post("/login", IndexController.postLogin)
    .get("/registro", IndexController.getRegistre)
    .post("/registro", IndexController.postRegister)

module.exports = router;