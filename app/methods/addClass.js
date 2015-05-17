// adds a class to the current selection
const addClass = function( classes: string ): Object {
	if ( typeof classes !== 'string' ) {
		throw Error( 'addClass needs a string' );
	}

	classes = classes.split(' ');

	this.selection.forEach(sel => {
		return classes.forEach(className => {
			if ( !sel.classList.contains( className ) ) {
				sel.className += ` ${className}`;
			}
		});
	});

	return this;
};

export default addClass;
