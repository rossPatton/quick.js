const isNode = require( '../utils/isNode' );

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
		console.log( 'dom', dom );
		let tmp = document.createElement( 'div' );
		tmp.insertAdjacentHTML( 'afterbegin', dom );

		console.dir( tmp );
		console.dir( this );

		this.each( el => {
			let w = tmp.firstChild.cloneNode( true );

			console.log( 'wrap', w );
			console.dir( el );
			console.log( 'el', typeof el );

			w.appendChild( el.cloneNode( true ) );

			return el.parentNode.replaceChild( w, el );
		} );
	}

	return this;
};

module.exports = wrap;
