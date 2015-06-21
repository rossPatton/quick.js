const query = require( '../utils/query' );

// compares two selections and returns only the ones that are in both
const has = function( sel, doWeFilter ) {
	const compare = query( sel ).sel;

	// returns true or false depending on whether or not
	// the new selection overlaps with the old selection
	const hasEl = compare.some( el => {
		return this[0].some( el2 => {
			return el.isEqualNode( el2 );
		} );
	} );

	// set the result to be the new selection, if filter passed in
	// only do if there is overlap, otherwise just return the existing selection
	if ( hasEl && doWeFilter === 'filter' ) {
		let filtered = [];

		// compare new selection (compare) to existing selection (this[0])
		// filtered is the result of the filter, flattened (which seems unecessary but...)
		compare.forEach( el1 => filtered.push( this[0].filter( el2 => el1.isEqualNode( el2 ) ) ) );
		filtered = [].concat.apply( [], filtered );

		// set the overlap to be the new selection
		this[0] = filtered;
	}

	// if using haz as a boolean, just return hasEl
	// if using haz as a filter then keep chaining
	return doWeFilter === 'filter' ? this : hasEl;
};

module.exports = has;
