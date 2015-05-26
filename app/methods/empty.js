// adds a class to the current selection
const empty: Function = function(): Object {
	for ( let dom of this[0] ) {
		while ( dom.firstChild ) {
			dom.removeChild( dom.firstChild );
		}
	}

	return this;
};

export default empty;
