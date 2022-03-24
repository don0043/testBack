const express = require('express')
const app = express()
const User=require("./model/user");
const cors = require('cors')
const https = require("https");
const fs = require("fs");


app.use(express.json());
app.use(cors());
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};


app.post('/sms', (req, res) => {
    const user=User.create({name: req.body.name,
        email: req.body.email,
        message: req.body.message});
    return res.json(user);

})


https.createServer(options, app)
    .listen(3001, function (req, res) {
        console.log("Server started at port 3001");
    });



