/*global describe, it */

var expect = require('chai').expect;

var pkg = require('../package.json');
var api = require('../src');


describe('nedboose', function() {

  it('should be an object with the expected exported properties', function() {
    /*jshint expr:true */

    // General API
    expect(api).to.be.an('object');
    expect(api.nedb).to.be.a('function');
    expect(api.nedb).to.equal(require('nedb'));
    expect(api.version).to.be.a('string');
    expect(api.version).to.equal(pkg.version);

    // Connecting
    expect(api.Nedboose).to.be.a('function');
    expect(api.Connection).to.be.a('function');
    expect(api.createConnection).to.be.a('function');
    expect(api.connect).to.be.a('function');
    expect(api.disconnect).to.be.a('function');
    expect(api.connection).to.be.null;

    // Modeling
    expect(api.Collection).to.be.a('function');
    expect(api.Document).to.be.a('function');
    expect(api.Model).to.be.a('function');
    expect(api.Schema).to.be.a('function');
    expect(api.SchemaType).to.be.a('function');
    expect(api.SchemaTypes).to.be.a('function');
    expect(api.Types).to.be.a('function');
    expect(api.VirtualType).to.be.a('function');
    expect(api.model).to.be.a('function');
    expect(api.modelNames).to.be.a('function');

    // Querying
    expect(api.Query).to.be.a('function');
    expect(api.Aggregate).to.be.a('function');

    // Miscellaneous
    expect(api.Error).to.be.a('function');

  });


  describe('.Nedboose', function() {

    it('should ...?');

  });

});
