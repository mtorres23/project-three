var express = require('express');
router = express.Router();
var User = require('../models/user.model.js');
var authHelpers = require('../helpers/auth.js');

//LOGIN
router.get('/login', function(req, res) {
  res.render('users/login.hbs');
});

router.post('/login', authHelpers.loginUser, function(req, res){
  res.redirect(`/users/${req.session.currentUser._id}`);
});

router.delete('/', function(req, res){
  req.session.destroy(function(){
    res.redirect('/');
  });
});

module.exports = router;
