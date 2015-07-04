'use strict';


/**
 * @module
 * @public
 * @requires isNode
 * @description appends dom nodes to the dom, and the end of each item in the selection
 * @param {Object} [appendMe] the dom node to append to the dom
 * @returns {Object} [this] like most methods, returns parent object
 */
const append = function( appendMe ) {
	// if passed a dom node directly, check it and append it
	if ( this.isNode( appendMe ) ) {
		this.raf( this.each( el => {
			return el.appendChild( appendMe.cloneNode() );
		} ) );
	}
	else if ( typeof appendMe === 'string' ) {
		let tmp = document.createElement( 'div' );
		tmp.insertAdjacentHTML( 'afterbegin', appendMe );
		this.raf( this.each( el => {
			return el.appendChild( tmp.firstChild.cloneNode( true ) );
		} ) );
	}

	return this;
};

module.exports = append;
