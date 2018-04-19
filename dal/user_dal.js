var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT user_name FROM bank_account';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};


exports.insert = function (params, callback) {

    var query = 'insert into bank_account (user_name, password, customer_id) values (?, ?, ?)';
    var queryData = [params.user_name, params.password, params.customer_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    })
};
/*
exports.search = function (user_name, password, callback) {
    var query = 'call all_getacct(?, ?)';
    var queryData = [user_name, password];

    connection.query(query, queryData, function (err, result) {
        callback (err, result);
    })
};
*/

exports.search = function(user_name, password, callback) {
    var query = 'call customer_getinfo(?, ?)';
    var queryData = [user_name, password];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};



