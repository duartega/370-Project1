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

exports.insert = function (params, callback) {

    var query = 'insert into customer (first_name, last_name, email, phone_number, SSN) values (?, ?, ?, ?, ?)';
    var queryData = [params.first_name, params.last_name, params.email,  params.phone_number, params.SSN];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    })

};

exports.update = function(params, callback) {
    var query = 'update customer_address set SSN = ? where SSN = ?';
    var queryData = [params.SSN, params.SSN];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};



