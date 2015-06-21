// return true if first element in the selection has all the classes passed in
const hasClass = function( classes ) {
	return classes.split( ' ' ).every( c => {
		return this[0][0].className.indexOf( c ) !== -1;
	} );
};

module.exports = hasClass;
