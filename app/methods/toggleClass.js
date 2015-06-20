// toggles them classes
const toggleClass = function( classes ) {
	this.each( el => {
		classes.split( ' ' ).forEach( c => {
			if ( el.className.indexOf( c ) === -1 ) {
				el.className += ` ${c}`;
			}
			else {
				el.classList.remove( c );
			}
		} );
	} );

	return this;
};

export default toggleClass;
