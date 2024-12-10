const express = require('express');
const router = express.Router();
const aboutUsImagesController = require('../controller/aboutUsImageController');

router.get("/all", aboutUsImagesController.list);

module.exports=router