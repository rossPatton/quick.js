/* @flow */
'use strict'


/**
 * @module
 * @public
 * @requires isNode
 * @description appends dom node or nodes to the dom, after each node in the selection
 * @param {Object} [appendMe] the node to append to the dom
 * @returns {Object} [this] like most methods, returns parent object
 */
const after = function( appendMe: string | Object ): Object {
	// if passed a dom node directly, check it and append it
	if ( this.isNode( appendMe ) === true ) {
		this.each( function( el: Object ) {
			return el.parentNode.insertBefore(
				appendMe.cloneNode(), el.nextSibling
			)
		} )
	}
	else if ( typeof appendMe === 'string' ) {
		let tmp: Object = document.createElement( 'div' )

		tmp.innerHTML = appendMe

		this.each( function( el: Object ) {

			console.log( el.parentNode.innerHTML )

			return el.parentNode.insertBefore(
				tmp.firstChild.cloneNode( true ), el.nextSibling
			)
		} )
	}

	return this
}

module.exports = after
