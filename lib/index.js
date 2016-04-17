/*
 * bluebird3 module
 * Exports Bluebird promise library v3.x
 */

// load bluebird
var Bluebird = require('bluebird'),
    makeBluebird = require('bluebird/js/release/promise'),
    bluebirdVersion = require('bluebird/package.json').version;

/*
 * clone method
 * Returns a new independent instance of Bluebird
 *
 * @returns {Function} Bluebird - new Bluebird instance
 */
var clone = function() {
    return addProperties(makeBluebird());
};

/*
 * addProperties function
 * Adds `clone` method and `version` property to Bluebird
 *
 * @param {Function} Bluebird - Bluebird instance
 * @returns {Function} Bluebird - same Bluebird instance
 */
function addProperties(Bluebird) {
    Bluebird.clone = clone;
    if (!Bluebird.version) Bluebird.version = bluebirdVersion;
    return Bluebird;
}

// export Bluebird with added properties
module.exports = addProperties(Bluebird);
