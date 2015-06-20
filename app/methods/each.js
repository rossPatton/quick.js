// iterate over our elements
const each = function( cb ) {
	const len = this[0].length;
	let i = 0;

	for ( i; i < len; i++ ) {
		cb( this[0][i], i, this[0] );
	}

	return this;
}

export default each;
