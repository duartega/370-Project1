var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM check_register';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function (params, callback) {

    var query = 'insert into check_register (date, merchant_name, description, debit, credit) values (?, ?, ?, ?, ?)';
    var queryData = [params.date, params.merchant_name, params.description, params.debit, params.credit, params.checking, params.savings];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    })

};
