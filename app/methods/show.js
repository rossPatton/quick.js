/* @flow */
'use strict'


/**
 * @module
 * @public
 * @TODO reset to original display value instead of block
 * @description show an element, while waiting for css transitions to finish
 * @returns {Object} [this] like most methods, returns parent object
 */
const show = function(): Object {
	this.each( el => {
		const hidden: boolean = el.style.display === 'none'
		if ( hidden === false ) { return }

		// if no transition just go ahead and hide
		if ( this.hasDuration( el ) === false ) {
			el.style.display = 'block'
		}
		// else wait out the transition
		else {
			el.addEventListener( this.transition( el ), () => {
				el.style.display = 'block'
			}, false )
		}

	} )

	return this
}

module.exports = show
