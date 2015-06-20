import query from '../utils/queryAll';

// compares two selections and returns only the ones that are in both
const haz = function( sel, doWeFilter ) {
	let compare = [];
	let res = [];

	// first we create a comparison array using the selection passed in
	query( sel ).forEach( el => compare.push( el ) );
	// compare new selection (sel) to existing selection, res is the result of the filter
	compare.forEach( el1 => res.push( this[0].filter( el2 => el1.isEqualNode( el2 ) ) ) );
	// set the result to be the new selection
	if ( doWeFilter === 'filter' ) {
		this[0] = res;
	}

	// if using haz as a boolean, check result array length and return true/false
	// if using haz as a filter (you passed in a selection), then keep chaining
	return doWeFilter ? this : res.length > 0;
};

export default haz;
