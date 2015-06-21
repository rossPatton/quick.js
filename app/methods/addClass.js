// const each = require( './each' );

// adds a class to the current selection
const addClass = function( classes ) {
	this.each( el => {
		return classes.split( ' ' ).forEach( c => {
			return el.className.indexOf( c ) === -1 ? el.className += ` ${c}` : '';
		} );
	} );

	return this;
};

module.exports = addClass;
