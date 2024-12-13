const mongoose = require("mongoose");

const homeAboutUsImageSchema = new mongoose.Schema({
    key: String,
    imageUrl: String
});
const homeAboutUsImageModel = mongoose.model('homeaboutus', homeAboutUsImageSchema );

module.exports = homeAboutUsImageModel;
