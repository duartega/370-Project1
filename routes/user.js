var express = require('express');
var router = express.Router();
var user_dal = require('../dal/user_dal');
var account_dal = require('../dal/account_dal');
var login_dal = require('../dal/login_dal');

router.get('/add', function(req, res, next) {
            res.render('user/user_add', {customer_id: req.query.customer_id});
});

router.get('/insert', function(req, res) {
    user_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/');
        }
    });
});

router.get('/login', function(req, res, next) {
    user_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('user/user_login');
        }
    })
});

router.get('/search', function(req, res) {
    user_dal.search(req.query.user_name, req.query.password, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.render('user/user_account_view', {user_result: result[0]});
        }
    });
});

router.get('/display', function(req, res) {
    login_dal.Display(req.query.first_name, req.query.zip, req.query.user_name, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('account/my_account', {customer: result});
        }
    })
});


module.exports = router;