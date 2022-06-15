const express = require('express')

const app = express()

const mongoose = require('mongoose')


carModel = require('./car-schema')


// add body-parser to allow reading html form items
const bodyParser = require('body-parser')
const { json } = require('express/lib/response')

app.use(bodyParser.urlencoded({extended: true}))
// allow use of json format
app.use(express.json());


const port = 8800


// Connection to Database with mongoose
mongoose.connect('mongodb://localhost:27017')

const car_database = mongoose.connection;

car_database.on('error', console.error.bind(console, 'Connection error: '))
car_database.on('open', () =>{
    console.log('Sweet!!, MongoDB Connection Success!!')
})

// Linking to HTML file
app.get('/', (req, res) =>{
    // slanting /
    res.sendFile('D:/MERN FamilyBank/MERN-car-mgt/index.html')
})



// CRUD operations

// CREATE - post - add cars
app.post('/', async (req, res) =>{
    const newCar = new carModel(req.body)
    try
    {
        const savedCar = await newCar.save()
        res.status(200).json(savedCar)
    }
    catch(err) {
        res.status(500).json(err)
    }
})

// READ - get - access/view car information
// single car



// All cars in the system



// UPDATE - put - 




// DELETE - delete - car sold, hence delete






// Server listening
app.listen(port, (req, res) =>{
    console.log(`Server is running, listening on  ${port}`)
})

