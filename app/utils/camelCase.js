// converts lowercase-dash to camelCase
const camelCase = function( str ) {
	return str.replace(/-[a-z]/gi, s => s.replace('-', '').toUpperCase() );
};

export default camelCase;
