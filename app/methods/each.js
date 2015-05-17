const each = function( cb ) {
	const len = this.selection.length;
	let i = 0;

	for ( i; i < len; i++ ) {
		cb( this.selection[i], i, this.selection );
	}

	return this;
}

export default each;
