// narrows the selection
const slice = function( pos1, pos2 ) {
	this[0] = this[0].slice( pos1, pos2 );
	return this;
};

module.exports = slice;
