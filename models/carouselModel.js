const mongoose = require("mongoose");

async function test() {
    const resp = await carouselModel.create({"key" : "1", "imageUrl" : "test.png"});
    console.log(resp);
    
} 

const carouselSchema = new mongoose.Schema({
    key: String,
    imageUrl: String
});
const carouselModel = mongoose.model('carousel', carouselSchema, 'carousel' );

async() => await test()


module.exports = carouselModel;
