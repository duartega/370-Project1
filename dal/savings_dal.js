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

exports.getinfo = function(transaction_id, callback) {
    var query = 'call savings_getinfo(?)';
    var queryData = [transaction_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.edit = function(callback) {
    var query = 'SELECT * FROM savings';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'update savings set date = ?, description = ?, credit = ?, debit = ?, balance = ? where transaction_id = ?';
    var queryData = [params.date, params.description, params.credit, params.debit, params.balance, params.transaction_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.delete = function(transaction_id, callback) {
    var query = 'call savings_transaction_delete (?)';
    var queryData = [transaction_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};