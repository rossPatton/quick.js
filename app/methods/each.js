// iterate over our elements
const each = function( cb: Function ): Object {
	const len: number = this[0].length;
	let i: number = 0;

	for ( i; i < len; i++ ) {
		cb( this[0][i], i, this[0] );
	}

	return this;
}

export default each;
