var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var User = require('./models/User');

var app = express();

var db = mongoose.connect('mongodb://localhost:27017/capstone-project', function (err, response) {
    if(err) console.log("There is an error in connecting to mongodb");
    console.log("Mongo connection is working!");

})

app.use(cors());

app.set('port', process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.get('/', (req,res) => {
    res.send("hello");
})

app.post('/register', (req,res) => {
    console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;

    var user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;

    user.save((err,result) => {
        if(err) {
            console.log("There is an error in adding user in database");
            res.send({failure: "Failed to add user", status: 500});
        }
        res.send({success: "Successfully added a new user", status: 200});
    })


})







app.listen(app.get('port'), function(err, response) {
    console.log("server is running on port", app.get('port'));
});