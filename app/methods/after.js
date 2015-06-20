import isNode from '../utils/isNode';

// appends dom nodes using those nodes directly or strings
const after = function( appendMe ) {
	// if passed a dom node directly, check it and append it
	if ( isNode( appendMe ) ) {
		this.each( el => {
			return el.parentNode.insertBefore( appendMe.cloneNode(), el.nextSibling );
		} );
	}
	// return dom.insertBefore(tmp.firstChild.cloneNode(true), dom.firstChild);
	else if ( typeof appendMe === 'string' ) {
		let tmp = document.createElement( 'div' );
		tmp.insertAdjacentHTML( 'afterbegin', appendMe );

		this.each( el => {
			return el.parentNode.insertBefore( tmp.firstChild.cloneNode( true ), el.nextSibling );
		} );
	}

	return;
};

export default after;
