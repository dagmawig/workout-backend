const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const API_PORT = 3001;

const router = express.Router();

// allow app request from any domain
app.use(cors({ origin: "*" }));

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.set('strictQuery', false)

// connects our back end code with the database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

// connecting to DB
db.once("open", () => console.log("connected to database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));