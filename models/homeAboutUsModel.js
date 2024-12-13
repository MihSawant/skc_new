const mongoose = require("mongoose");
const homeAboutUsImageSchema = new mongoose.Schema({
    key: String,
    imageUrl: String
});
 
module.exports = mongoose.model('homeAboutUsImageSchema', homeAboutUsImageSchema);
