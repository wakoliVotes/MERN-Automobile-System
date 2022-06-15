const mongoose = require('mongoose')

const { Schema } = mongoose;

const carSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    picture: {
        type: Buffer,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    carStatusNew:{
        type: Boolean,
        required: true
    },
    YOM:{
        type: Number,
        required: true
    },
    engineSizeCC:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: 20000,
        max: 35000
    },
    YOM:{
        type: Number,
        required: true
    },
    previousOwners:{
        type: Number,
        required: true
    },
    countryOfMan:{
        type: String,
        required: true
    }
})

const carSystemModel = mongoose.model('CarSchema', carSchema)


module.exports = carSystemModel;
