'use strict';

/**
 * Handler that mainly reads and writes from card collection.
 * @type {Object}
 */

var CardModel = require('../models/card.js'),
    validator = require('./card-validator.js'),
    logger = require('../util/logger.js');

/**
 * Converts input params to an actual Card mongoose object.
 * @param {Object} params Parameters to use when populating card.
 * @param {Function} callback Invoked with [err, card].
 */
exports.convertParamsToCard = function(params, callback) {
  params = validator.validateCreateParams(params);

  if (params.err) {
    callback(params.err, null);
  } else {
    var card = new CardModel(params);
    console.log(card);
    callback(null, card);
  }
}
