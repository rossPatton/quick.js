// adds a class to the current selection
const addClass = function( classes: string ): Object {
	if ( typeof classes !== 'string' ) {
		throw Error( 'addClass needs a string' );
	}

	for ( let dom of this[0] ) {
		for ( let c of classes.split(' ') ) {
			if ( dom.className.indexOf(c) === -1 ) {
				dom.className += ` ${c}`;
			}
		}
	}

	return this;
};

export default addClass;
