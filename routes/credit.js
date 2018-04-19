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

module.exports = router;