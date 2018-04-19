var express = require('express');
var router = express.Router();
var address_dal = require('../dal/address_dal');
var account_dal = require('../dal/account_dal');


router.get('/add', function(req, res, next) {
            res.render('address/address_add', {customer_id: req.query.customer_id});
});

router.get('/insert', function(req, res) {
    var customer_id = req.query.customer_id;
    address_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/user/add?customer_id=' + customer_id);
        }
    });
});

router.get('/update', function (req, res) {
    address_dal.update(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/user/add');
        }
    });
});

module.exports = router;