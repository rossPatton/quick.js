// remove classes
// @TODO jsdom doesnt support classList because it is the worst
const removeClass = function( classes ) {
	this.each( el => {
		classes.split( ' ' ).forEach( c => {
			return el.className.indexOf( c ) !== -1 ? el.classList.remove( c ) : '';
		} );
	} );

	return this;
};

module.exports = removeClass;
