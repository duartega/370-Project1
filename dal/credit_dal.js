var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM credit';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function (params, callback) {

    var query = 'insert into credit (date, merchant_name, description, balance, credit, debit) values (?, ?, ?, ?, ?, ?)';
    var queryData = [params.date, params.merchant_name, params.description, params.balance, params.credit, params.debit];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    })

};
