// a really basic extend function for now
const extend = function( source ) {
	for ( let method in source ) {
		if ( source.hasOwnProperty( method ) ) {
			Object.getPrototypeOf( this )[method] = source[method];
		}
	}

	return this;
};

export default extend;
