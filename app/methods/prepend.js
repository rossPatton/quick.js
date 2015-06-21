const isNode = require( '../utils/isNode' );

// appends dom nodes using those nodes directly or strings
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
