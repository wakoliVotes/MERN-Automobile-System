const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const path = require('path');

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


  //Connection to database - saved in .env file
  const uri = process.env.MONGODBCONNECTION;
  mongoose.Promise = global.Promise;
  
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  
  mongoose.connection.on('error', function() {
      console.log('Connection to Mongo established.');
      console.log('Could not connect to the database. Exiting now...');
      process.exit();
  });
  mongoose.connection.once('open', function() {
      console.log("Successfully connected to the MERNAuto Database");
  })
  
// For Heroku deployment on heroku, build is deployed and prefix is frontend, name of React JS app file
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
  });
}

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', console.log(`Server is running on Port ${port}`));