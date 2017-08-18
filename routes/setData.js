var express = require('express');
var router = express.Router();
var mysql = require("mysql");


/* GET home page. */
router.post('/', function(req, res, next) {
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect();

var name = req.body.name;
    var place = req.body.place;
    var animal = req.body.animal;
    var thing = req.body.thing;
    connection.query("insert into test values ('','" + name + "','" + place + "','" + animal + "','" + thing + "')", function(err, results) {
        if (err) throw err;
        console.log("1 record inserted.");
        res.end();
    })
  
});

module.exports = router;
