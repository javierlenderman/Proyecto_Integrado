const express = require('express');
const router = express.Router();
//
const mirutaController = require('../controller/mirutaController');

router
    //login
    .get("/login", mirutaController.getIndex);

module.exports = router;