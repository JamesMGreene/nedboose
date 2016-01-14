var api = {

  // General API
  nedb:    require('nedb'),
  version: require('./package.json').version,

  // Connecting
  Nedboose:   require('./src/nedboose'),
  Connection: require('./src/connection'),
  createConnection: function() {

  },
  connect: function() {

  },
  disconnect: function() {

  },
  connection: null,

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

};

module.exports = api;
