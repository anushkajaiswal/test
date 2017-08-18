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
var id = req.body.id;
    var name = req.body.name;
    var place = req.body.place;
    var animal = req.body.animal;
    var thing = req.body.thing;
    connection.query("update test set name='" + name + "',place='" + place + "',animal='" + animal + "',thing='" + thing + "' where id ='" + id + "'", function(err, result) {
        if (err) throw err;
        console.log("updated successfully");
        res.end();
    })
  
});

module.exports = router;
