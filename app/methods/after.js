'use strict'


/**
 * @module
 * @public
 * @requires isNode
 * @description appends dom node or nodes to the dom, after each node in the selection
 * @param {Object} [appendMe] the node to append to the dom
 * @returns {Object} [this] like most methods, returns parent object
 */
const after = function( appendMe ) {
	// if passed a dom node directly, check it and append it
	if ( this.isNode( appendMe ) ) {
		this.each( el => {
			return el.parentNode.insertBefore(
				appendMe.cloneNode(), el.nextSibling
			)
		} )
		// this.raf( this.each( el => {
		// 	return el.parentNode.insertBefore(
		// 		appendMe.cloneNode(), el.nextSibling
		// 	)
		// } ) )
	}
	// return dom.insertBefore(tmp.firstChild.cloneNode(true), dom.firstChild)
	else if ( typeof appendMe === 'string' ) {
		let tmp = document.createElement( 'div' )
		tmp.insertAdjacentHTML( 'afterbegin', appendMe )

		this.each( el => {
			return el.parentNode.insertBefore(
				tmp.firstChild.cloneNode( true ), el.nextSibling
			)
		} )

		// this.raf( this.each( el => {
		// 	return el.parentNode.insertBefore(
		// 		tmp.firstChild.cloneNode( true ), el.nextSibling
		// 	)
		// } ) )
	}

	return this
}

module.exports = after
