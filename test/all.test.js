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

	it('getNewLibraryCopy returns separate instance of bluebird', function() {
		var B2 = Bluebird.getNewLibraryCopy(),
			B3 = B2.getNewLibraryCopy();

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

	var VERSION_REGEX = /^3\.\d+\.\d+$/;

	describe('version is semver version of Bluebird library', function() {
		it('with Bluebird', function() {
			expect(Bluebird.version).to.be.a('string');
			expect(Bluebird.version).to.match(VERSION_REGEX);
		});

		it('with Bluebird clones', function() {
			var B2 = Bluebird.getNewLibraryCopy(),
				B3 = B2.getNewLibraryCopy();

			expect(B2.version).to.be.a('string');
			expect(B2.version).to.match(VERSION_REGEX);
			expect(B3.version).to.be.a('string');
			expect(B3.version).to.match(VERSION_REGEX);
		});
	});
});
