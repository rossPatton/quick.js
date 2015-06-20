// remove all child nodes from an element
const empty = function() {
	this.each( el => {
		while ( el.firstChild ) {
			el.removeChild( el.firstChild );
		}
	} );

	return this;
};

export default empty;
