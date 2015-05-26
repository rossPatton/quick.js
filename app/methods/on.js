const on = function( events: string, cb: Function, capture = false ) {
	if ( typeof events !== 'string' ) {
		throw TypeError('on requires a string');
	}

	for ( let dom of this[0] ) {
		for ( let event of events.split(' ') ) {
			dom.addEventListener( event, cb.bind(dom), capture );
		}
	}

	return this;
}

export default on;
