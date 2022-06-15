const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// car Model
const carSchema = require("../models/carSchemaModel");

// CREATE car
router.post("/create-car", (req, res, next) => {
    carSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// READ cars
router.get("/cars", (req, res) => {
    carSchema.find((error, data) => {
        if(error){
            return next(error);
        } else {
            res.json(data)
        }
    })
});

// UPDATE car 
router.route("/update-car/:id")
// Get Single car
.get((req, res) => {
    carSchema.findById(
        req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        });
})

// UPDATE car Data
.put((req, res, next) => {
    carSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                return next(error);
                console.log(error);
            } else {
                res.json(data);
                console.log("Car updated successfully !");
            }
        }
    );
});

// DELETE car
router.delete('/delete-car/:id', (req, res, next) =>{
    req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    };
});

module.exports = router;