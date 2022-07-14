const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    registration: {
        type: String,
        required: true },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

//Here, the collection is called MernCars
module.exports = mongoose.model('MernCars', carSchema);