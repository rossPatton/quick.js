'use strict'


/**
 * @module
 * @public
 * @TODO wait for css transitions
 * @description hide an element, while waiting for css transitions to finish
 * @returns {Object} [this] like most methods, returns parent object
 */
const hide = function() {
	this.each( el => {
		if ( el.style.display !== 'none' ) {
			el.style.display = 'none'
			// this.raf( function() {
			// 	el.style.display = 'none'
			// } )
		}
	} )
	return this
}

module.exports = hide
