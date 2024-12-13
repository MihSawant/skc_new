const express = require('express');
const router = express.Router();
const carouselController = require('../controller/carouselController');

router.get("/all", carouselController.list);

module.exports=router