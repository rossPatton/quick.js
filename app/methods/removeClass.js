// remove classes
const removeClass = function( classes: string ): Object {
	if ( typeof classes !== 'string' ) {
		throw Error( 'removeClass needs a string' );
	}

	classes = classes.split(' ');

	this.selection.forEach(sel => {
		return classes.forEach(className => {
			if ( sel.classList.contains( className ) ) {
				sel.classList.remove( className );
			}
		});
	});

	return this;
};

export default removeClass;
