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
		return classes.split( ' ' ).forEach( c => {
			if ( el.className.indexOf( c ) === -1 ) {
				this.raf( function() {
					el.className += ` ${c}`;
				} );
			}
			else {
				el.className = this.raf( function() {
					return el.className.replace( c, '' );
				} );
			}
		} );
	} );

	return this;
};

module.exports = toggleClass;
