'use strict';

var card_handler = require('../../handlers/card-handler.js');
var category_handler = require('../../handlers/category-handler.js');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

module.exports = function (app) {
  app.get('/cards/new',
    ensureLoggedIn, 
    show_form);

  app.post('/cards/new',
    ensureLoggedIn,
    card_create);  
};

function show_form(req, res, next) {
  category_handler.list(req.user, {}, function (err, statuscode, categories) {
    if (err) {
      return next(err);
    } else {
      res.render('card-create', {
          user: req.user,
          categories: categories
        });
    }
  });
}

function card_create(req, res, next) {
  card_handler.create(req.user, req.body, function(err, status, card) {
    if(err) {
      next(err);
    }
    res.redirect('/cards');
  });
}