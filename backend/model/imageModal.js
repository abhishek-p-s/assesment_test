var mongoose = require("mongoose");

const imageModal = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: Array, required: false },
}, {
    timestamps: true
})

const Image = mongoose.model('image', imageModal);
module.exports = Image