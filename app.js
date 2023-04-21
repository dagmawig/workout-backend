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

// router to load user data
router.post("/loadData", (req, res) => {
    const { userID, email } = req.body;
    if (userID === '' || userID === undefined) res.json({ success: false, err: "not the right userID" })
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
            if (data.email === "") {
                Data.findOneAndUpdate(
                    { userID: userID },
                    {
                        $set: {
                            email: email,
                        },
                    },
                    { new: true },
                    (err, data) => {
                        if (err) res.json({ success: false, err: err });
                        else res.json({ success: true, data: data })
                    }
                );
            }
            else res.json({ success: true, data: data });
        }
    });
});


// router to reset user account
router.post("/resetData", (req, res) => {
    const { userID } = req.body;

    Data.findOne(
        { userID: userID }, (err, data) => {
            if (err) res.json({ success: false, err: err })
            else {
                Data.findOneAndUpdate(
                    { userID: userID },
                    {
                        $set: {
                            templateArr: [],
                            fixTempArr: [
                                {
                                    tempID: "2023-01-19T23:46:30.547Z",
                                    workoutTimeArr: [],
                                    name: "Back and Biceps",
                                    exerList: [
                                        {
                                            bodyPart: "upper legs",
                                            equipment: "barbell",
                                            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0032.gif",
                                            id: "0032",
                                            name: "barbell deadlift",
                                            target: "glutes",
                                            localUrl: "107.gif",
                                            metric: "wr",
                                            timeStamp: [],
                                            sets: 3,
                                        },
                                        {
                                            bodyPart: "back",
                                            equipment: "cable",
                                            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0861.gif",
                                            id: "0861",
                                            name: "cable seated row",
                                            target: "upper back",
                                            localUrl: "376.gif",
                                            metric: "wr",
                                            timeStamp: [],
                                            sets: 3,
                                        },
                                        {
                                            bodyPart: "back",
                                            equipment: "cable",
                                            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0150.gif",
                                            id: "0150",
                                            name: "cable bar lateral pulldown",
                                            target: "lats",
                                            localUrl: "272.gif",
                                            metric: "wr",
                                            timeStamp: [],
                                            sets: 3,
                                        },
                                        {
                                            bodyPart: "upper arms",
                                            equipment: "barbell",
                                            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0031.gif",
                                            id: "0031",
                                            name: "barbell curl",
                                            target: "biceps",
                                            localUrl: "106.gif",
                                            metric: "wr",
                                            timeStamp: [],
                                            sets: 3,
                                        },
                                    ],
                                },
                                {
                                    tempID: "2023-01-19T23:49:32.364Z",
                                    workoutTimeArr: [],
                                    name: "Strong 5X5 - Workout A",
                                    exerList: [
                                        {
                                            bodyPart: "upper legs",
                                            equipment: "barbell",
                                            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0043.gif",
                                            id: "0043",
                                            name: "barbell full squat",
                                            target: "glutes",
                                            localUrl: "120.gif",
                                            metric: "wr",
                                            timeStamp: [],
                                            sets: 5,
                                        },
                                        {
                                            bodyPart: "chest",
                                            equipment: "barbell",
                                            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0025.gif",
                                            id: "0025",
                                            name: "barbell bench press",
                                            target: "pectorals",
                                            localUrl: "98.gif",
                                            metric: "wr",
                                            timeStamp: [],
                                            sets: 5,
                                        },
                                        {
                                            bodyPart: "back",
                                            equipment: "barbell",
                                            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0027.gif",
                                            id: "0027",
                                            name: "barbell bent over row",
                                            target: "upper back",
                                            localUrl: "101.gif",
                                            metric: "wr",
                                            timeStamp: [],
                                            sets: 5,
                                        },
                                    ],
                                },
                                {
                                    tempID: "2023-01-19T23:51:37.898Z",
                                    workoutTimeArr: [],
                                    name: "Strong 5X5 - Workout B",
                                    exerList: [
                                        {
                                            bodyPart: "upper legs",
                                            equipment: "barbell",
                                            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0043.gif",
                                            id: "0043",
                                            name: "barbell full squat",
                                            target: "glutes",
                                            localUrl: "120.gif",
                                            metric: "wr",
                                            timeStamp: [],
                                            sets: 5,
                                        },
                                        {
                                            bodyPart: "shoulders",
                                            equipment: "barbell",
                                            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0091.gif",
                                            id: "0091",
                                            name: "barbell seated overhead press",
                                            target: "delts",
                                            localUrl: "190.gif",
                                            metric: "wr",
                                            timeStamp: [],
                                            sets: 5,
                                        },
                                        {
                                            bodyPart: "upper legs",
                                            equipment: "barbell",
                                            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0032.gif",
                                            id: "0032",
                                            name: "barbell deadlift",
                                            target: "glutes",
                                            localUrl: "107.gif",
                                            metric: "wr",
                                            timeStamp: [],
                                            sets: 1,
                                        },
                                    ],
                                },
                            ],
                            workoutObj: {},
                            record: {}
                        }
                    },
                    { new: true },
                    (err, data) => {
                        if (err) res.json({ success: false, err: err })
                        else {
                            return res.json({ success: true, data: data })
                        }
                    }
                );
            }
        }
    )
});

// router to clear workout history
router.post("/resetHistory", (req, res) => {
    const {userID} = req.body;
    console.log("clearing history", userID)
    Data.findOne(
    {userID: userID}, (err, data) => {
      if(err) res.json({success: false, err:err})
      else { 
        let newTemplateArr = data.templateArr;
        newTemplateArr.map(temp=> {
          temp.workoutTimeArr = [];
        })
        
        Data.findOneAndUpdate(
          {userID: userID},
          {
            $set: {
              templateArr: newTemplateArr,
              fixTempArr: [
            {
              tempID: "2023-01-19T23:46:30.547Z",
              workoutTimeArr: [],
              name: "Back and Biceps",
              exerList: [
                {
                  bodyPart: "upper legs",
                  equipment: "barbell",
                  gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0032.gif",
                  id: "0032",
                  name: "barbell deadlift",
                  target: "glutes",
                  localUrl: "107.gif",
                  metric: "wr",
                  timeStamp: [],
                  sets: 3,
                },
                {
                  bodyPart: "back",
                  equipment: "cable",
                  gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0861.gif",
                  id: "0861",
                  name: "cable seated row",
                  target: "upper back",
                  localUrl: "376.gif",
                  metric: "wr",
                  timeStamp: [],
                  sets: 3,
                },
                {
                  bodyPart: "back",
                  equipment: "cable",
                  gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0150.gif",
                  id: "0150",
                  name: "cable bar lateral pulldown",
                  target: "lats",
                  localUrl: "272.gif",
                  metric: "wr",
                  timeStamp: [],
                  sets: 3,
                },
                {
                  bodyPart: "upper arms",
                  equipment: "barbell",
                  gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0031.gif",
                  id: "0031",
                  name: "barbell curl",
                  target: "biceps",
                  localUrl: "106.gif",
                  metric: "wr",
                  timeStamp: [],
                  sets: 3,
                },
              ],
            },
            {
              tempID: "2023-01-19T23:49:32.364Z",
              workoutTimeArr: [],
              name: "Strong 5X5 - Workout A",
              exerList: [
                {
                  bodyPart: "upper legs",
                  equipment: "barbell",
                  gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0043.gif",
                  id: "0043",
                  name: "barbell full squat",
                  target: "glutes",
                  localUrl: "120.gif",
                  metric: "wr",
                  timeStamp: [],
                  sets: 5,
                },
                {
                  bodyPart: "chest",
                  equipment: "barbell",
                  gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0025.gif",
                  id: "0025",
                  name: "barbell bench press",
                  target: "pectorals",
                  localUrl: "98.gif",
                  metric: "wr",
                  timeStamp: [],
                  sets: 5,
                },
                {
                  bodyPart: "back",
                  equipment: "barbell",
                  gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0027.gif",
                  id: "0027",
                  name: "barbell bent over row",
                  target: "upper back",
                  localUrl: "101.gif",
                  metric: "wr",
                  timeStamp: [],
                  sets: 5,
                },
              ],
            },
            {
              tempID: "2023-01-19T23:51:37.898Z",
              workoutTimeArr: [],
              name: "Strong 5X5 - Workout B",
              exerList: [
                {
                  bodyPart: "upper legs",
                  equipment: "barbell",
                  gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0043.gif",
                  id: "0043",
                  name: "barbell full squat",
                  target: "glutes",
                  localUrl: "120.gif",
                  metric: "wr",
                  timeStamp: [],
                  sets: 5,
                },
                {
                  bodyPart: "shoulders",
                  equipment: "barbell",
                  gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0091.gif",
                  id: "0091",
                  name: "barbell seated overhead press",
                  target: "delts",
                  localUrl: "190.gif",
                  metric: "wr",
                  timeStamp: [],
                  sets: 5,
                },
                {
                  bodyPart: "upper legs",
                  equipment: "barbell",
                  gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0032.gif",
                  id: "0032",
                  name: "barbell deadlift",
                  target: "glutes",
                  localUrl: "107.gif",
                  metric: "wr",
                  timeStamp: [],
                  sets: 1,
                },
              ],
            },
          ],
              workoutObj: {},
              record: {}
            }
          },
          {new: true},
          (err, data) => {
            if(err) res.json({success: false, err:err})
            else {
              console.log("reset success")
              return res.json({success: true, data: data})
            }
          }
        );
      }
    }
    )
  })

// router to update preset exercise templates
router.post("/updateFixTemp", (req, res) => {
    const { userID, fixTempArr } = req.body;

    Data.findOneAndUpdate(
        { userID: userID },
        {
            $set: {
                fixTempArr: fixTempArr
            }
        },
        { new: true },
        (err, data) => {
            if (err) res.json({ success: false, err: err });
            return res.json({ success: true, data: data })

        });
});

// router to update user exercise templates
router.post("/updateTemp", (req, res) => {
    const { userID, templateArr } = req.body;
    console.log("updateTemp")
    Data.findOneAndUpdate(
        { userID: userID },
        {
            $set: {
                templateArr: templateArr
            }
        },
        { new: true },
        (err, data) => {
            if (err) res.json({ success: false, err: err });
            return res.json({ success: true, data: data })

        });
});

// router to update user workout data
router.post("/updateWorkoutObj", (req, res) => {
    const { userID, workoutObj, user, updatedTempArr, record } = req.body;

    Data.findOneAndUpdate(
        { userID: userID },
        {
            $set: {
                workoutObj: workoutObj,
                record: record,
                ...(user === 'true' && { templateArr: updatedTempArr }),
                ...(user !== 'true' && { fixTempArr: updatedTempArr })
            }
        },
        { new: true },
        (err, data) => {
            if (err) res.json({ success: false, err: err });
            return res.json({ success: true, data: data })

        });
});


// append /api for our http requests
app.use("/", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));