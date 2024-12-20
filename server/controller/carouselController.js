const CarouselModel = require("../../models/carouselModel")

module.exports = {
    list: async function (req, res) {
        const all = await CarouselModel.find({})
        console.log("all", all);
        
        return res.json(all);

    },

    update: async function (req, res) {
        const id = req.params.id;
        console.log(id);
        const aboutUs = await CarouselModel.findOne({ _id: id }).exec()
        if (aboutUs != null) {
            // update
            // faq.product_id = req.body.product_id ? req.body.product_id : faq.product_id;
            // faq.question = req.body.question ? req.body.question : faq.question;
            // faq.answer = req.body.answer ? req.body.answer : faq.answer;

            aboutUs.key = req.body.key ? req.body.key : aboutUs.key
            aboutUs.imageUrl = req.body.imageUrl ? req.body.imageUrl : aboutUs.imageUrl

            await CarouselModel.updateOne({_id: id },aboutUs).exec()
            return res.json(aboutUs);
        } else {
            // create
            return res.status(400).json({ "message": "Error" })

        }
    }
}