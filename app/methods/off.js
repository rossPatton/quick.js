const off = function( events: string, cb: Function, capture = false ) {
	if ( typeof events !== 'string' ) {
		throw TypeError('off requires a string');
	}

	for ( let el of this[0] ) {
		for ( let event of events.split(' ') ) {
			el.removeEventListener( event, cb.bind(el), capture );
		}
	}

	return this;
}

export default off;
