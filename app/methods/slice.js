'use strict';


/**
 * @module
 * @public
 * @description narrow the selection
 * @param {number} [pos1] starting index for new selection
 * @param {number} [pos2] end index for new selection
 * @returns {Object} [this] like most methods, returns parent object
 */
const slice = function( pos1, pos2 ) {
	this[0] = this[0].slice( pos1, pos2 );
	return this;
};

module.exports = slice;
