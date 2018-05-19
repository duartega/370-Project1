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

exports.delete = function(transaction_id, callback) {
    var query = 'call checking_transaction_delete (?)';
    var queryData = [transaction_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.groupBy = function (callback) {
    var query = 'select c.merchant_name, count(c.merchant_name) as count\n' +
        'from checking c\n' +
        'group by c.merchant_name';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.In = function (callback) {
    var query = 'select c.merchant_name as checking_merchant_name\n' +
        'from checking c\n' +
        'where c.merchant_name in (select cr.merchant_name as credit_merchant from credit cr where c.merchant_name = cr.merchant_name)';

    connection.query(query, function (err, result) {
        callback(err, result);

    });
};

exports.NotIn = function (callback) {
    var query = 'select c.merchant_name as checking_merchant_name\n' +
        'from checking c\n' +
        'where c.merchant_name not in (select cr.merchant_name as credit_merchant from credit cr where c.merchant_name = cr.merchant_name)';

    connection.query(query, function (err, result) {
        callback(err, result);

    });
};

exports.Exists = function (callback) {
    var query = 'select c.merchant_name as checking_merchant_name\n' +
        'from checking c\n' +
        'where exists (select cr.merchant_name as credit_merchant from credit cr where c.merchant_name = cr.merchant_name);';

    connection.query(query, function (err, result) {
        callback(err, result);

    });
};

exports.NotExists = function (callback) {
    var query = 'select c.merchant_name as checking_merchant_name\n' +
        'from checking c\n' +
        'where not exists (select cr.merchant_name as credit_merchant from credit cr where c.merchant_name = cr.merchant_name);';

    connection.query(query, function (err, result) {
        callback(err, result);

    });
};

exports.Join = function (callback) {
    var query = 'select c.merchant_name, c.date\n' +
        'from checking c\n' +
        'where c.date in (select cr.date from credit cr\n' +
        'join savings s on s.date = cr.date\n' +
        ');';

    connection.query(query, function (err, result) {
        callback(err, result);

    });
};

exports.orderBy = function (callback) {
    var query = 'select c.merchant_name, count(c.merchant_name) as count\n' +
        'from checking c\n' +
        'group by c.merchant_name\n' +
        'Order By c.merchant_name;';

    connection.query(query, function (err, result) {
        callback(err, result);

    });
};

exports.correlated = function (callback) {
    var query = 'call correlated()';

    connection.query(query, function (err, result) {
        callback(err, result);

    });
};

exports.many = function (callback) {
    var query = 'SELECT merchant_name, avg(debit) as debit, count(merchant_name) as count\n' +
        '    FROM checking c\n' +
        '    WHERE debit > (SELECT AVG(debit) FROM checking)\n' +
        '    group by merchant_name\n' +
        '    having count(merchant_name) > 1;';

    connection.query(query, function (err, result) {
        callback(err, result);

    });
};