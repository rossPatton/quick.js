const off = function( events: string, cb: Function, capture = false ) {
	if ( typeof events !== 'string' ) {
		throw TypeError('off requires a string');
	}

	for ( let dom of this[0] ) {
		for ( let event of events.split(' ') ) {
			dom.removeEventListener( event, cb.bind(dom), capture );
		}
	}

	return this;
}

export default off;
