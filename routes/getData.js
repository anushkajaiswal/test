var express = require('express');
var router = express.Router();
var mysql = require("mysql");



/* GET home page. */
router.get('/', function(req, res, next) {
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect();
 connection.query('SELECT * from test', function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
        res.end();
    })
  
});

module.exports = router;
