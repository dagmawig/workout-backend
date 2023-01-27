const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// database document structure
const DataSchema = new Schema(
    {
        userID: {type: String, default: ""},
        email: {type: String, default: ""},
        templateArr: {type: Object, default: []},
        fixTempArr: {type: Object, default: [
            {
                "tempID": "2023-01-19T23:46:30.547Z",
                "workoutTimeArr": [],
                "name": "Back and Biceps",
                "exerList": [
                    {
                        "bodyPart": "upper legs",
                        "equipment": "barbell",
                        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0032.gif",
                        "id": "0032",
                        "name": "barbell deadlift",
                        "target": "glutes",
                        "localUrl": "107.gif",
                        "metric": "wr",
                        "timeStamp": [],
                        "sets": 3
                    },
                    {
                        "bodyPart": "back",
                        "equipment": "cable",
                        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0861.gif",
                        "id": "0861",
                        "name": "cable seated row",
                        "target": "upper back",
                        "localUrl": "376.gif",
                        "metric": "wr",
                        "timeStamp": [],
                        "sets": 3
                    },
                    {
                        "bodyPart": "back",
                        "equipment": "cable",
                        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0150.gif",
                        "id": "0150",
                        "name": "cable bar lateral pulldown",
                        "target": "lats",
                        "localUrl": "272.gif",
                        "metric": "wr",
                        "timeStamp": [],
                        "sets": 3
                    },
                    {
                        "bodyPart": "upper arms",
                        "equipment": "barbell",
                        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0031.gif",
                        "id": "0031",
                        "name": "barbell curl",
                        "target": "biceps",
                        "localUrl": "106.gif",
                        "metric": "wr",
                        "timeStamp": [],
                        "sets": 3
                    }
                ]
            },
            {
                "tempID": "2023-01-19T23:49:32.364Z",
                "workoutTimeArr": [],
                "name": "Strong 5X5 - Workout A",
                "exerList": [
                    {
                        "bodyPart": "upper legs",
                        "equipment": "barbell",
                        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0043.gif",
                        "id": "0043",
                        "name": "barbell full squat",
                        "target": "glutes",
                        "localUrl": "120.gif",
                        "metric": "wr",
                        "timeStamp": [],
                        "sets": 5
                    },
                    {
                        "bodyPart": "chest",
                        "equipment": "barbell",
                        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0025.gif",
                        "id": "0025",
                        "name": "barbell bench press",
                        "target": "pectorals",
                        "localUrl": "98.gif",
                        "metric": "wr",
                        "timeStamp": [],
                        "sets": 5
                    },
                    {
                        "bodyPart": "back",
                        "equipment": "barbell",
                        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0027.gif",
                        "id": "0027",
                        "name": "barbell bent over row",
                        "target": "upper back",
                        "localUrl": "101.gif",
                        "metric": "wr",
                        "timeStamp": [],
                        "sets": 5
                    }
                ]
            },
            {
                "tempID": "2023-01-19T23:51:37.898Z",
                "workoutTimeArr": [],
                "name": "Strong 5X5 - Workout B",
                "exerList": [
                    {
                        "bodyPart": "upper legs",
                        "equipment": "barbell",
                        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0043.gif",
                        "id": "0043",
                        "name": "barbell full squat",
                        "target": "glutes",
                        "localUrl": "120.gif",
                        "metric": "wr",
                        "timeStamp": [],
                        "sets": 5
                    },
                    {
                        "bodyPart": "shoulders",
                        "equipment": "barbell",
                        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0091.gif",
                        "id": "0091",
                        "name": "barbell seated overhead press",
                        "target": "delts",
                        "localUrl": "190.gif",
                        "metric": "wr",
                        "timeStamp": [],
                        "sets": 5
                    },
                    {
                        "bodyPart": "upper legs",
                        "equipment": "barbell",
                        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0032.gif",
                        "id": "0032",
                        "name": "barbell deadlift",
                        "target": "glutes",
                        "localUrl": "107.gif",
                        "metric": "wr",
                        "timeStamp": [],
                        "sets": 1
                    }
                ]
            }
        ]
    },
    workoutObj: {type: Object, default:{}},
    record: {type: Object, default: {}}
    },
    { timestamps: true, _id: true, minimize: false, strict: false }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);