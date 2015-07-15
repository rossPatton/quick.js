'use strict'


/**
 * @module
 * @public
 * @description remove the selection from the DOM
 * @returns {Object} [this] like most methods, returns parent object
 */
const remove = function() {
	this.raf( this.each( el => el.parentNode.removeChild( el ) ) )
	return this
}

module.exports = remove
