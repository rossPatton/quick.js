// adds a class to the current selection
const addClass = function( classes: string ): Object {
	if ( typeof classes !== 'string' ) {
		throw Error( 'addClass needs a string' );
	}

	for ( let el of this[0] ) {
		for ( let c of classes.split(' ') ) {
			if ( el.className.indexOf(c) === -1 ) {
				el.className += ` ${c}`;
			}
		}
	}

	return this;
};

export default addClass;
