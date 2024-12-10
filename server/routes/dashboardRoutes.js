var express = require('express');
var router = express.Router();
const dashboardController = require('./../controller/dashboardController');
const quotesController = require("../controller/quotesController");
const leaderController = require("../controller/leaderController");
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/img/leaders')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({storage: storage})
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
router.post("/aboutImages/addimage", upload.single('leader'), (req, res, next) =>{
    return res.json({
        "file" : req.file.originalname
    })
 });
module.exports = router;