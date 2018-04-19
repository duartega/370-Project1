var express = require('express');
var router = express.Router();
var checking_dal = require('../dal/checking_dal');

/* GET users listing */
router.get('/all', function(req, res, next) {
    checking_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/checking_view_all', {checking: result[0]});
        }
    })
});

router.get('/sort', function(req, res, next) {
    checking_dal.sort(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/all_sorted', {checking: result[0]});
        }
    });
});

router.get('/add', function(req, res, next) {
    checking_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/checking_add', {checking: result[0]});
        }
    })
});

router.get('/insert', function(req, res) {
    checking_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/checking/all');
        }
    });
});



router.get('/update', function (req, res) {
    checking_dal.update(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/checking/all');
        }
    });
});

router.get('/edit', function (req, res) {
    checking_dal.getinfo(req.query.transaction_id, function(err, result) {
        if (err) { res.send(err); }
        else {
            res.render('checking/CheckingUpdate',
                {checking: result[0][0]});
        }
    });
});



module.exports = router;

