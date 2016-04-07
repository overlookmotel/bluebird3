// --------------------
// bluebird3 module
// Tests
// --------------------

// modules
var chai = require('chai'),
	expect = chai.expect,
	bluebird = require('../lib/');

// init
chai.config.includeStack = true;

// tests

/* jshint expr: true */
/* global describe, it */

describe('Tests', function() {
	it('exports bluebird', function() {
		expect(bluebird).to.be.ok;
		expect(typeof bluebird.prototype.then).to.equal('function');
	});
});
