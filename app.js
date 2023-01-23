const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Data = require('./data');
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


router.post("/loadData", (req, res) => {
    const { userID, email } = req.body;

    console.log(userID)

    Data.findOne({ userID: userID }, (err, data) => {
        if (err) res.json({ success: false, err: err });

        if (!data) {
            let data = new Data();
            data.userID = userID;
            data.email = email;
            console.log("new data: ", data);
            data.save(err => {
                if (err) res.json({ success: false, err: err });
                res.json({ success: true, data: data });
            })
        } else {
            res.json({ success: true, data: data });
        }
    });
});

// append /api for our http requests
app.use("/", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));