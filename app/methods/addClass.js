'use strict';
// const raf = require( '../utils/raf' );


/**
 * @module
 * @public
 * @description add the class or classes to the selection
 * @param	{string} [classes] the classes to add, separated by a space
 * @returns {Object} [this] like most methods, returns parent object
 */
const addClass = function( classes ) {
	this.each( el => {
		return classes.split( ' ' ).forEach( c => {
			if ( el.className.indexOf( c ) === -1 ) {
				return this.raf( function() {
					el.className += ` ${c}`;
				} );
			}
		} );
	} );

	return this;
};

module.exports = addClass;
