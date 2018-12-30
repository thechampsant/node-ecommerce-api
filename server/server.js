var express = require('express');
var bodyParser = require('body-parser');

var {User} = require('./models/user');
var {mongoose} = require('./db/mongoose');

var app = express();

app.use(bodyParser.json());

app.post('/user',(req,res)=>{
    var user = new User({
        name: req.body.name,
        mobileNumber: req.body.mobileNumber,
        password: req.body.password
    });
  
    user.save().then((doc)=>{
        res.status(200).send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000,()=>{
    console.log('app has started on port 3000');
});