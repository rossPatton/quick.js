'use strict';


/**
 * @module
 * @public
 * @TODO jsdom doesnt support classList because it is the worst
 * @description remove classes from the selection
 * @param	{string} [classes] the classes to remove, separated by a space
 * @returns {Object} [this] like most methods, returns parent object
 */
const removeClass = function( classes ) {
	this.each( el => {
		classes.split( ' ' ).forEach( c => {
			return el.className.indexOf( c ) !== -1 ? el.classList.remove( c ) : '';
		} );
	} );

	return this;
};

module.exports = removeClass;
