var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM customer_address';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};


exports.insert = function (params, callback) {

    var query = 'insert into customer_address (street, city, state, zip, customer_id) values (?, ?, ?, ?, ?)';
    var queryData = [params.street, params.city, params.state,  params.zip, params.customer_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    })

};

exports.update = function(params, callback) {
    var query = 'update bank_account set SSN = ? where SSN = ?';
    var queryData = [params.SSN, params.SSN];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};



