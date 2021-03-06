// Userland modules
var nedb = require('nedb');

// Local modules
var pkg = require('../package.json');


/**
 * The Nedboose constructor.
 *
 * The exports object of the `nedboose` main module is an instance of this class.
 * Most apps will only use this one instance.
 *
 * @class
 * @example
 * var nedboose = require('nedboose');
 */
function Nedboose() {

  //
  // Connecting
  //

  /**
   * The default connection of this {@link Nedboose} instance.
   *
   * This is the connection used by default for every model created using {@link Nedboose#model}.
   *
   * @member {?Connection}
   */
  this.connection = null;
}


//
// General API
//

/**
 * The {@link external:NeDB NeDB} module/"driver" that Nedboose uses.
 *
 * If you need to use a forked version of NeDB, you can override it here.
 *
 * @type {external:NeDB}
 * @see {@link external:NeDB}
 * @example
 * var nedboose = require('nedboose');
 *
 * // Use NewDB instead of NeDB
 * nedboose.nedb = require('newdb');
 */
Nedboose.prototype.nedb = nedb;


/**
 * The Nedboose version.
 * @type {string}
 */
Nedboose.prototype.version = pkg.version;


/**
 * A reference to the {@link Nedboose} constructor.
 *
 * The exports object of the `nedboose` main module is an instance of this class.
 *
 * @method
 * @example
 * var nedboose = require('nedboose');
 * var nedboose2 = new nedboose.Nedboose();
 */
Nedboose.prototype.Nedboose = Nedboose;



//
// Connecting
//

/**
 * The Nedboose {@link Connection} constructor.
 * @method
 */
Nedboose.prototype.Connection = require('./connection');

/*
  Connection: require('./src/connection'),
  createConnection: function() {

  },
  connect: function() {

  },
  disconnect: function() {

  },

  // Modeling
  Collection:  require('./src/collection'),
  Document:    require('./src/document'),
  Model:       require('./src/model'),
  Schema:      require('./src/schema'),
  SchemaType:  require('./src/schema-type'),
  SchemaTypes: require('./src/schema-types'),
  Types:       require('./src/types'),
  VirtualType: require('./src/virtual-type'),
  model: function() {

  },
  modelNames: function() {

  },

  // Querying
  Query:     require('./src/query'),
  Aggregate: require('./src/aggregate'),

  // Miscellaneous
  Error: require('./src/error')
*/


module.exports = Nedboose;
