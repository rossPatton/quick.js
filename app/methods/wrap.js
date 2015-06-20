import isNode from '../utils/isNode';

const wrap = function( dom ) {
	// if passed a dom node directly, check it and append it
	if ( isNode( dom ) ) {
		this.each( el => {
			let w = dom.cloneNode( true );
			w.appendChild( el.cloneNode( true ) );
			return el.parentNode.replaceChild( w, el );
		} );
	}
	else if ( typeof dom === 'string' ) {
		let tmp = document.createElement( 'div' );
		tmp.insertAdjacentHTML( 'afterbegin', dom );

		this.each( el => {
			let w = tmp.firstChild.cloneNode( true );
			w.appendChild( el.cloneNode( true ) );
			return el.parentNode.replaceChild( w, el );
		} );
	}

	return this;
};

export default wrap;
