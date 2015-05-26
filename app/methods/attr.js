// set attribute
const attr = function( get: string, set: string ): Object {
	if ( typeof get !== 'string' ) {
		throw Error( 'attr needs a string' );
	}

	let attr: string = '';

	for ( let dom of this[0] ) {
		if ( dom.hasAttribute(get) ) {
			attr = dom.getAttribute(get);

			if ( set ) {
				dom.setAttribute(get, set);
			}
		}
	}

	return set ? set : attr;
};

export default attr;
