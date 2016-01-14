// Node.js core modules
var util = require('util');



/**
 * NedbooseError constructor
 *
 * @constructor
 * @param {String} msg Error message
 * @inherits Error https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error
 */

function NedbooseError(msg) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this);
  }
  else {
    this.stack = new Error().stack;
  }

  this.name = 'NedbooseError';
  this.message = msg;
}

// Inherits from Error.
util.inherits(NedbooseError, Error);


module.exports = NedbooseError;
