'use strict';


/**
 * @module
 * @public
 * @requires query
 * @description add a node or nodes to the existing selection
 * @TODO redundant, needs cleanup, but works for now
 * @param	{string} [sel] the string (selector) used to query the dom
 * @returns {Object} [this] like most methods, returns parent object
 */
const add = function( sel ) {
	// iterate over new selection and current
	// if no dupe, push to current selection
	this.query( sel ).forEach( el => {
		this.sel.forEach( el2 => {
			if ( !el.isEqualNode( el2 ) ) {
				this.sel.push( el );
			}
		} );
	} );

	return this;
};

module.exports = add;
