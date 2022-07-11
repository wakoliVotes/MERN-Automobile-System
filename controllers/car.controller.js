const Car = require('../models/car.model.js');
const mongoose = require('mongoose');

exports.create = function(req, res){
    let carEntry = new Car({
        registration: req.body.registration,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        owner: req.body.owner,
        image: req.body.image
    });
    carEntry.save(function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Error during new car entry" });
        } else {
            console.log(data);
            res.send('The car document has been added');
        }
    });
};

exports.updateByID= function(req, res) {
    filterbyID= {registration: req.body.registration};
    Car.findOneAndUpdate(filterbyID, { make: req.body.make, model: req.body.model, year: req.body.year, owner: req.body.owner, image: req.body.image }, { new: true }, function(err) {
        if (err) {
            console.log("Something went wrong when updating the data!");
            res.send("ERROR: Not Updated. " + err);
        }
        res.send("Updated");
    });
}

exports.updateByOwner= function(req, res) {
    filterbyCurrentOwner= {owner: req.body.currentowner};
    Car.updateMany(filterbyCurrentOwner, { $set:{owner: req.body.owner} }, {upsert: true}, function(err) {
        if (err) {
            console.log("Something went wrong when updating the data!");
            res.send("ERROR: Not Updated. " + err);
        }
        res.send("Updated");
    });
}

exports.deleteByID = function(req, res) {
    Car.findOneAndRemove({ registration: req.body.registration }, function(err) {
        if (err) {
            console.log("ERROR: Car entry not deleted. " + err);
            res.send("ERROR: Car entry not deleted. " + err);
        }
        res.send("Car entry deleted");
    });
}

exports.findAll = function(req, res) {
    Car.find({},function(err, cars) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retrieving blogs." });
        } else {
            res.send(cars);
        }
    });
}

exports.findOlder = function(req,res) {
    Car.find({year:{$lt:2015}},function(err,cars){
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error ocurred while retrieving blogs."});
        } else {
            res.send(cars);
        }});}