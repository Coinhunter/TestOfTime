var passport = require('passport');
var ensure_logged_out = require('connect-ensure-login').ensureLoggedOut('/');
var logger = require('../../util/logger.js');

module.exports = function (app) {
  app.get('/login',
    ensure_logged_out,
    show_login_form);

  app.post('/login',
    ensure_logged_out,
    authenticate);
};

function show_login_form(req, res, next) {
  res.render('login');
}

function authenticate(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    
    if (err) { 
      return next(err); 
    }
    
    if (!user) {
      return res.render('login', { loginerror: true });
    }
    
    req.logIn(user, function(err) {
      if (err) {
        return next(err); 
      }
      return res.redirect('/');
    });
  })(req, res, next);
}
