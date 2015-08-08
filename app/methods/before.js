'use strict'


/**
 * @module
 * @public
 * @requires isNode
 * @description appends dom nodes before each node in the selection
 * @param {Object} [prependMe] the node to prepend to the dom
 * @returns {Object} [this] like most methods, returns parent object
 */
const before = function( prependMe ) {
	// if passed a dom node directly, check it and append it
	if ( this.isNode( prependMe ) ) {
		this.each( el => {
			return el.parentNode.insertBefore( prependMe.cloneNode(), el.previousSibling )
		} )
		// this.raf( this.each( el => {
		// 	return el.parentNode.insertBefore( prependMe.cloneNode(), el.previousSibling )
		// } ) )
	}
	// return dom.insertBefore(tmp.firstChild.cloneNode(true), dom.firstChild)
	else if ( typeof prependMe === 'string' ) {
		let tmp = document.createElement( 'div' )
		tmp.insertAdjacentHTML( 'afterbegin', prependMe )
		this.each( el => {
			return el.parentNode.insertBefore( tmp.firstChild.cloneNode( true ), el.previousSibling )
		} )
		// this.raf( this.each( el => {
		// 	return el.parentNode.insertBefore( tmp.firstChild.cloneNode( true ), el.previousSibling )
		// } ) )
	}

	return this
}

module.exports = before
