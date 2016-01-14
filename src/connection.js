//
// Connection a.k.a. Database
//

// Node.js core modules
var util = require('util');
var EventEmitter = require('events').EventEmitter;


/**
 * The Connection constructor.
 *
 * @class
 * @extends external:EventEmitter
 * @todo @example, @param, etc.
 */
function Connection() {
  EventEmitter.call(this);


}

util.inherits(Connection, EventEmitter);


/**
 * @todo Everything
 */
Connection.prototype.open = function Connection$$open() {

};



module.exports = Connection;
