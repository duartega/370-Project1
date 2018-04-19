var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM customer';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.Display = function(first_name, zip, user_name, callback){
    var query = 'call all_getinfo(?, ?, ?)';
    var queryData = [first_name, zip, user_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};
