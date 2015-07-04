'use strict';


/**
 * @module
 * @public
 * @description iterate over selection, pass each item to callback
 * @param {Function} [cb] the callback
 * @returns {Object} [this] like most methods, returns parent object
 */
const each = function( cb ) {
	const len = this.sel.length;
	let i = 0;

	for ( i; i < len; i++ ) {
		cb( this.sel[i], i, this.sel );
	}

	return this;
};

module.exports = each;
