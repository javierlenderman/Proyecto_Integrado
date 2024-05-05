const express = require('express');
const router = express.Router();
//
const IndexController = require('../controller/IndexController');

router
    //login
    .get("/index", IndexController.getIndex);

module.exports = router;