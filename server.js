const express = require('express')
const app = express()
const port = 3001
const User=require("./model/user");
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.post('/sms', (req, res) => {
    const user=User.create({name: req.body.name,
                                email: req.body.email,
                                message: req.body.message});
    return res.json(user);

})


app.listen(port, () => {
    console.log(`Message app listening on port ${port}`)
})

