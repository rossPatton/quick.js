'use strict';
const query = require( '../utils/query' );


/**
 * @module
 * @description add a node or nodes to the existing selection
 * @TODO redundant, needs cleanup, but works for now
 * @param	{string} [sel] the string (selector) used to query the dom
 * @returns {Object} [this] like most methods, returns parent object
 */
const add = function( sel ) {
	// iterate over new selection and current
	// if no dupe, push to current selection
	query( sel ).sel.forEach( el => {
		this[0].forEach( el2 => {
			if ( !el.isEqualNode( el2 ) ) {
				this[0].push( el );
			}
		} );
	} );

	return this;
};

module.exports = add;
