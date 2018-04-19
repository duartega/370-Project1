var express = require('express');
var router = express.Router();
var login_dal = require('../dal/login_dal');

router.get('/login', function(req, res, next) {
    login_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('user/user_login');
        }

    })

});


module.exports = router;