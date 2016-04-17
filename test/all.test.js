// --------------------
// bluebird3 module
// Tests
// --------------------

// modules
var chai = require('chai'),
	expect = chai.expect,
	Bluebird = require('../lib/');

// init
chai.config.includeStack = true;

// tests

/* jshint expr: true */
/* global describe, it */

describe('Tests', function() {
	it('exports bluebird', function() {
		expect(Bluebird).to.be.ok;
		expect(typeof Bluebird.prototype.then).to.equal('function');

		expect(Bluebird.resolve()).to.be.instanceof(Bluebird);
	});

	it('clone returns separate instance of bluebird', function() {
		var B2 = Bluebird.clone(),
			B3 = B2.clone();

		expect(B2).to.be.ok;
		expect(typeof B2.prototype.then).to.equal('function');

		expect(B3).to.be.ok;
		expect(typeof B3.prototype.then).to.equal('function');

		expect(B2).to.not.equal(Bluebird);
		expect(B3).to.not.equal(Bluebird);
		expect(B3).to.not.equal(B2);

		expect(Bluebird.resolve()).to.be.instanceof(Bluebird);
		expect(B2.resolve()).to.be.instanceof(B2);
		expect(B2.resolve()).to.not.be.instanceof(Bluebird);
		expect(B3.resolve()).to.be.instanceof(B3);
		expect(B3.resolve()).to.not.be.instanceof(Bluebird);
		expect(B3.resolve()).to.not.be.instanceof(B2);
	});
});
