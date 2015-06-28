'use strict';


/**
 * @module
 * @public
 * @TODO wait for css transitions
 * @description just gets the length of the current selection
 * @returns {number} the length
 */
const size = function() {
	return this[0].length;
};

module.exports = size;
