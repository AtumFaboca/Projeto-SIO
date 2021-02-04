//Dependencies
require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('./middlewares/session');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session);

//Import Routes
const apiRouter = require('./routes');

//Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection sucessful!'))
  .catch((err) => console.error(err));

//Routes
app.use('/', apiRouter);

//Initialize the server
app.listen(process.env.DEFAULT_PORT);

//Additional information
console.log('Server is listenning on: http://localhost:3000 .');
