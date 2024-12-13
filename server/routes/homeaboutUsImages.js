const express = require('express');
const router = express.Router();
const homeAboutUsImagesController = require('../controller/homeAboutUsImageController');

router.get("/all", homeAboutUsImagesController.list);

module.exports=router