const query = require( '../utils/query' );

// gets or sets (safely) html content of a dom node
// @TODO redundant, needs cleanup, but works for now
// redundant-ness is to make sure module works if used on its own
const add = function( sel ) {
	// iterate over new selection and current
	// if no dupe, push to current selection
	query( sel ).sel.forEach( el => {
		this[0].forEach( el2 => {
			if ( !el.isEqualNode( el2 ) ) {
				this[0].push( el );
			}
		} );
	} );

	return this;
};

module.exports = add;
