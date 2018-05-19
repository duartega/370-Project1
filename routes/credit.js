var express = require('express');
var router = express.Router();
var credit_dal = require('../dal/credit_dal');

/* GET users listing */
router.get('/all', function(req, res, next) {
    credit_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('credit/credit_view_all', {credit: result});
        }

    })

});

router.get('/add', function(req, res, next) {
    credit_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('credit/credit_add', {credit: result});
        }

    })

});

router.get('/insert', function(req, res) {
    credit_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/credit/all');
        }
    });
});

router.get('/edit', function (req, res) {
    credit_dal.getinfo(req.query.transaction_id, function(err, result) {
        if (err) { res.send(err); }
        else {
            res.render('credit/CreditUpdate',
                {credit: result[0][0]});
        }
    });
});

router.get('/update', function (req, res) {
    credit_dal.update(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/credit/all');
        }
    });
});

router.get('/delete', function (req, res) {
    credit_dal.delete(req.query.transaction_id, function (err, result) {
        if (err) {
            console.log(result);
            res.send(err);
        }
        else {
            credit_dal.getAll(function (err, result) {
                console.log(result);
                res.render('credit/credit_view_all', {credit: result, was_successful: true});
            });
        }
    });
});

module.exports = router;