'use strict';


/**
 * @module
 * @public
 * @description return specific item in selection, from beginning or from the end
				if pos is out of bounds, returns empty selection
 * @param {number} [pos] the index of the selection to retrieve
 * @returns {Object} [this] like most methods, returns parent object
 */
const eq = function( pos ) {
	if ( pos < this[0].length ) {
		this[0] = [ this[0][pos] ]; // pos > 0 ? [ this[0][pos] ] : [ this[0][this[0].length + pos] ];
	}
	else {
		this[0] = [];
	}

	console.log( this[0].length );

	return this;
};

module.exports = eq;
