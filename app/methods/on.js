const on = function( events: string, cb: Function, capture = false ) {
	if ( typeof events !== 'string' ) {
		throw TypeError('on requires a string');
	}

	for ( let el of this[0] ) {
		for ( let event of events.split(' ') ) {
			el.addEventListener( event, cb.bind(el), capture );
		}
	}

	return this;
}

export default on;
