'use strict'


/**
 * @module
 * @public
 * @description remove classes from the selection
 * @param	{string} [classes] the classes to remove, separated by a space
 * @returns {Object} [this] like most methods, returns parent object
 */
const removeClass = function( classes ) {
	this.each( el => {
		return classes.split( ' ' ).forEach( c => {
			if ( el.className.indexOf( c ) === -1 ) { return }
			el.className = el.className.replace( c, '' )
			// el.className = this.raf( function() {
			// 	return el.className.replace( c, '' )
			// } )
		} )
	} )

	return this
}

module.exports = removeClass
