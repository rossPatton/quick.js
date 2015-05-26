// toggles them classes
const toggleClass: Function = function( classes: string ): Object {
	if ( typeof classes !== 'string' ) {
		throw Error( 'addClass needs a string' );
	}

	for ( let dom of this[0] ) {
		for ( let c of classes.split(' ') ) {
			if ( dom.className.indexOf(c) === -1 ) {
				dom.className += ` ${c}`;
			}
			else {
				dom.classList.remove(c);
			}
		}
	}

	return this;
};

export default toggleClass;
