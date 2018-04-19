var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM savings';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function (params, callback) {

    var query = 'insert into savings (date, description, balance, credit, debit) values (?, ?, ?, ?, ?)';
    var queryData = [params.date, params.description, params.balance, params.credit, params.debit];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    })

};
