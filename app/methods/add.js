const query = require( '../utils/query' );

// gets or sets (safely) html content of a dom node
const add = function( sel ) {
	for ( let el of query( sel ) ) {
		this[0].push( el );
	}

	return this;
};

module.exports = add;
