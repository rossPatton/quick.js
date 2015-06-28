'use strict';


/**
 * @module
 * @public
 * @description toggles classes (add or remove depending on context)
 * @param {string} [classes] the classes to toggle
 * @returns {Object} [this] like most methods, returns parent object
 */
const toggleClass = function( classes ) {
	this.each( el => {
		classes.split( ' ' ).forEach( c => {
			if ( el.className.indexOf( c ) === -1 ) {
				el.className += ` ${c}`;
			}
			else {
				el.classList.remove( c );
			}
		} );
	} );

	return this;
};

module.exports = toggleClass;
