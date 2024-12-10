const mongoose = require("mongoose");

const aboutUsImagesSchema = new mongoose.Schema({
    key: String,
    imageUrl: String
});
 
module.exports = mongoose.model("aboutUsImages", aboutUsImagesSchema);