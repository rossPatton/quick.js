'use strict';


/**
 * @module
 * @public
 * @description iterate over selection, pass each item to callback
 * @param {Function} [cb] the callback
 * @returns {Object} [this] like most methods, returns parent object
 */
const each = function( cb ) {
	const len = this[0].length;
	let i = 0;

	for ( i; i < len; i++ ) {
		cb( this[0][i], i, this[0] );
	}

	return this;
};

module.exports = each;
