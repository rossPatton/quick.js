// return specific item in selection, from beginning or from the end
// if pos is out of bounds, returns empty selection
const eq = function( pos ) {
	if ( pos < this[0].length ) {
		this[0] = pos > 0 ? [this[0][pos]] : [this[0][this[0].length + pos]];
	}
	else {
		this[0] = [];
	}

	return this;
};

module.exports = eq;
