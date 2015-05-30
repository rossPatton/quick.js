// remove classes
const removeClass = function( classes: string ): Object {
	if ( typeof classes !== 'string' ) {
		throw Error( 'removeClass needs a string' );
	}

	for ( let el of this[0] ) {
		for ( let c of classes.split(' ') ) {
			if ( el.className.indexOf(c) !== -1 ) {
				el.classList.remove(c);
			}
		}
	}

	return this;
};

export default removeClass;
