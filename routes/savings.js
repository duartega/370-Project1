var express = require('express');
var router = express.Router();
var savings_dal = require('../dal/savings_dal');

/* GET users listing */
router.get('/all', function(req, res, next) {
    savings_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('savings/savings_view_all', {savings: result});
        }

    })

});

router.get('/add', function(req, res, next) {
    savings_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('savings/savings_add', {savings: result});
        }

    })

});

router.get('/insert', function(req, res) {
    savings_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/savings/all');
        }
    });
});


router.get('/edit', function (req, res) {
    savings_dal.getinfo(req.query.transaction_id, function(err, result) {
        if (err) { res.send(err); }
        else {
            res.render('savings/SavingsUpdate',
                {savings: result[0][0]});
        }
    });
});

router.get('/update', function (req, res) {
    savings_dal.update(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/savings/all');
        }
    });
});

router.get('/delete', function (req, res) {
    savings_dal.delete(req.query.transaction_id, function (err, result) {
        if (err) {
            console.log(result);
            res.send(err);
        }
        else {
            savings_dal.getAll(function (err, result) {
                console.log(result);
                res.render('savings/savings_view_all', {savings: result, was_successful: true});
            });
        }
    });
});

module.exports = router;