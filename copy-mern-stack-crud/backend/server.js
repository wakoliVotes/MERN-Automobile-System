let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const CarsModel = require('./models/carSchemaModel');

const dotenv = require("dotenv")

dotenv.config()

const app = express()

// Express Route

const carRoute = require('../backend/routes/carroute');
// Configure mongodb database

// ***** This section is for path testing

const path = require('path');
app.use(express.static(path.join(__dirname, 'build')))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

// *****  The above section is for path testing

// Connecting MongoDB Database

mongoose.connect(process.env.MONGO)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Could not connect to database!'));
db.on('open', () => {
    console.log('Database successfully connected !');
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use('/cars', carRoute)

// PORT 
const port = 4000;

app.listen(port, () => {
    console.log("Connected to port " + port)
})


// 404 Error
app.use((req, res, next) => {
    res.status(404).send("Error 404!")
});


app.use(function (err, req, res, next) {
    console.log(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err, statusCode).send(err.message);
});
