// adds a class to the current selection
const hasClass = function( classes: string ): Object {
	if ( typeof classes !== 'string' ) {
		throw Error( 'addClass needs a string' );
	}

	let haz: Array = [];

	for ( let dom of this[0] ) {
		for ( let c of classes.split(' ') ) {
			if ( dom.className.indexOf(c) !== -1 ) {
				haz.push(dom);
			}
		}
	}

	this[0] = haz;
	return this;
};

export default hasClass;
