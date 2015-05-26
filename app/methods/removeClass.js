// remove classes
const removeClass = function( classes: string ): Object {
	if ( typeof classes !== 'string' ) {
		throw Error( 'removeClass needs a string' );
	}

	for ( let dom of this[0] ) {
		for ( let c of classes.split(' ') ) {
			if ( dom.className.indexOf(c) !== -1 ) {
				dom.classList.remove(c);
			}
		}
	}

	return this;
};

export default removeClass;
