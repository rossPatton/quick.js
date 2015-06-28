'use strict';
const isNode = require( '../utils/isNode' );


/**
 * @module
 * @public
 * @requires isNode
 * @description prepends dom nodes using those nodes directly or a string
 * @param {Object} [prependMe] the dom node to prepend to the dom
 * @returns {Object} [this] like most methods, returns parent object
 */
const prepend = function( prependMe ) {
	// if passed a dom node directly, check it and append it
	if ( isNode( prependMe ) ) {
		this.each( el => {
			return el.insertBefore( prependMe.cloneNode(), el.firstChild );
		} );
	}
	else if ( typeof prependMe === 'string' ) {
		let tmp = document.createElement( 'div' );
		tmp.insertAdjacentHTML( 'afterbegin', prependMe );
		this.each( el => {
			return el.insertBefore( tmp.firstChild.cloneNode( true ), el.firstChild );
		} );
	}

	return this;
};

module.exports = prepend;
