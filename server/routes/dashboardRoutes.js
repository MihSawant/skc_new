var express = require('express');
var router = express.Router();
const dashboardController = require('./../controller/dashboardController');
const quotesController = require("../controller/quotesController");
const leaderController = require("../controller/leaderController");
const multer = require("multer");
const aboutUsImageController = require('../controller/aboutUsImageController');
const homeAboutUsImageController = require('../controller/homeAboutUsImageController');
const carouselController = require('../controller/carouselController');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/img/leaders')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
var aboutStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/img/about')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
var homeAboutStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/img/home-about')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
var carouselStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/img/carousel')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({storage: storage})
const uploadAbout = multer({storage: aboutStorage})
const uploadHomeAbout = multer({storage: homeAboutStorage})
const uploadCarousel = multer({storage: carouselStorage})
// get all counts
router.get('/counts', dashboardController.getAllCounts);

// get all cvs
router.get('/cvs/list', dashboardController.getAllCvs);

// get all quotes
router.get('/quotes/all', quotesController.allQuotes);
// update leaders
router.put("/leader/:id", leaderController.update);
// upload photo leader
router.post("/leader/addimage", upload.single('leader'), (req, res, next) =>{
   return res.json({
       "file" : req.file.originalname
   })
});
router.post("/aboutImages/addimage", uploadAbout.single('leader'), (req, res, next) =>{
    return res.json({
        "file" : req.file.originalname
    })
 });
router.put("/aboutImages/:id", aboutUsImageController.update);

router.post("/homeaboutImages/addimage", uploadHomeAbout.single('leader'), (req, res, next) =>{
    return res.json({
        "file" : req.file.originalname
    })
 });
router.put("/homeaboutImages/:id", homeAboutUsImageController.update);


router.post("/carousel/addimage", uploadCarousel.single('leader'), (req, res, next) =>{
    return res.json({
        "file" : req.file.originalname
    })
 });
router.put("/carousel/:id", carouselController.update);


module.exports = router;