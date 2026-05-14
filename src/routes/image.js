const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
//
const imageController = require('../controller/imageController');

router
    .get('/imagen/:id',imageController.getImage)
    .get('/weapon-image/:id', imageController.getWeaponImage)
    .post('/modifica_foto',upload.single('image'), imageController.modificaFoto);
    

module.exports = router;