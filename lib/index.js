/*
 * bluebird3 module
 * Exports Bluebird promise library v3.x
 */

// load bluebird
var makeBluebird = require('bluebird/js/release/promise'),
    bluebirdVersion = require('bluebird/package.json').version;

/**
 * Returns a new independent instance of Bluebird.
 * @returns {Function} Bluebird - new Bluebird instance
 */
var clone = function() {
    var Bluebird = makeBluebird();
    Bluebird.clone = clone;
    if (!Bluebird.version) Bluebird.version = bluebirdVersion;
    return Bluebird;
};

// export Bluebird with added properties
module.exports = clone();
