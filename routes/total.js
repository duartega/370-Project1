var express = require('express');
var router = express.Router();
var total_dal = require('../dal/total_dal');

/* GET users listing */
router.get('/all', function(req, res, next) {
    total_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('total/total_view_all', {check_register: result});
        }

    })

});

router.get('/add', function(req, res, next) {
    total_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('total/total_add', {check_register: result});
        }

    })

});

router.get('/insert', function(req, res) {
    total_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/total/all');
        }
    });
});

module.exports = router;