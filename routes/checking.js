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

router.get('/delete', function (req, res) {
    checking_dal.delete(req.query.transaction_id, function (err, result) {
        if (err) {
            console.log(result);
            res.send(err);
        }
        else {
            checking_dal.getAll(function (err, result) {
                console.log(result);
                res.render('checking/checking_view_all', {checking: result[0], was_successful: true});
            });
        }
    });
});

router.get('/1', function (req, res){
    checking_dal.correlated(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/1', {checking: result[0], checking1: result[1]});
        }
    })
});

router.get('/2', function (req, res){
    checking_dal.Join (function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/2', {checking: result});
        }
    })
});

router.get('/3a', function (req, res){
    checking_dal.In (function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/3a', {checking: result});
        }
    })
});

router.get('/3b', function (req, res){
    checking_dal.NotIn (function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/3b', {checking: result});
        }
    })
});

router.get('/4a', function (req, res){
    checking_dal.Exists (function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/4a', {checking: result});
        }
    })
});

router.get('/4b', function (req, res){
    checking_dal.NotExists (function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/4b', {checking: result});
        }
    })
});

router.get('/5', function (req, res){
    checking_dal.correlated(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/1', {checking: result[0], checking1: result[1]});
        }
    })
});

router.get('/6', function (req, res){
    checking_dal.groupBy (function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/6', {checking: result});
        }
    })
});

router.get('/7', function (req, res){
    checking_dal.many (function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/7', {checking: result});
        }
    })
});

router.get('/8', function (req, res){
    checking_dal.orderBy (function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('checking/8', {checking: result});
        }
    })
});

module.exports = router;

