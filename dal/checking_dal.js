var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'call checking_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.sort = function (callback) {
    var query = 'call inOrder()';
    //var queryData = [params.date, params.merchant_name, params.description,  params.credit, params.debit, params.balance];

    connection.query(query, function (err, result) {
        callback(err, result);
    })
};

exports.insert = function (params, callback) {
    var query = 'call checking_insert(?, ?, ?, ?, ?, ?)';
    var queryData = [params.date, params.merchant_name, params.description,  params.credit, params.debit, params.balance];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    })
};



exports.getinfo = function(transaction_id, callback) {
    var query = 'call checking_getinfo(?)';
    var queryData = [transaction_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.edit = function(callback) {
    var query = 'SELECT * FROM checking';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'update checking set date = ?, merchant_name = ?, description = ?, credit = ?, debit = ?, balance = ? where transaction_id = ?';
    var queryData = [params.date, params.merchant_name, params.description, params.credit, params.debit, params.balance, params.transaction_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};