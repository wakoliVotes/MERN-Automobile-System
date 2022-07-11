const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes to carry each of the CRUD operations
require('./routes/new.js')(app);
require('./routes/home.js')(app);
require('./routes/delete.js')(app);
require('./routes/updateByID.js')(app);
require('./routes/updateByOwner.js')(app);
require('./routes/homeOlderCars.js')(app);


  //Connection to database - REPLACE uri with your own database, cluster, username, and password
  // const uri = 'mongodb+srv://javascriptms:1234@cluster0.8nj4m.mongodb.net/autosDatabase'
  const uri = process.env.MONGODBCONNECTION;
  // const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@morales-cluster-twasg.mongodb.net/task6?retryWrites=true`;
  mongoose.Promise = global.Promise;
  
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.connection.on('error', function() {
      console.log('Connection to Mongo established.');
      console.log('Could not connect to the database. Exiting now...');
      process.exit();
  });
  mongoose.connection.once('open', function() {
      console.log("Successfully connected to the Autos Database");
  })

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on Port ${PORT}`));