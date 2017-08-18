var express = require('express');
var router = express.Router();
var mysql = require("mysql");

/* GET home page. */
router.post('/', function (req, res, next) {

    var connection = mysql.createConnection({host: 'localhost', user: 'root', password: '', database: 'test'});

    connection.connect();

    var id = req.body.id;
    connection.query("delete from test where id " + id, function(err, results) {
        if (err) throw err;
        console.log("deleted successfully");
        res.end();
    })
});

module.exports = router;
