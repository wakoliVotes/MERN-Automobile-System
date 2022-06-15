const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carsSchema = new Schema({
    carbrand: {
        type: String
    },
    cartype: {
        type: String
    },
    carstatus: {
        type: String
    },
    countryOfman: {
        type: String
    },
    yearOfman: {
        type: Number
    },
    price:{
        type: Number
    },
    prevowners:{
        type: Number
    }
    }, {
        collection: 'cars'
    })

const CarsSchema = mongoose.model("CarsSchema", carsSchema)

// Update

module.exports = CarsSchema;