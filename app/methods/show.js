'use strict'


/**
 * @module
 * @public
 * @TODO wait for css transitions
 * @description show an element, while waiting for css transitions to finish
 * @returns {Object} [this] like most methods, returns parent object
 */
const show = function() {
	this.each( el => {
		if ( el.style.display === 'none' ) {
			el.style.display = 'block'
			// this.raf( function() {
			// 	el.style.display = 'block'
			// } )
		}
	} )
	return this
}

module.exports = show
