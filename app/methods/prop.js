// get prop (first match) or set prop on all matching
const prop = function( get, set ) {
	// if set if string, we pass it as the value
	// else we just pass in the config object
	// ternary lets ppl pass in a value here, or a config object
	if ( set ) {
		this.each( el => el[get] = set );
	}

	console.log( 'prop: this[0]', this[0] );

	// if getting, just return the prop (bracket notation needed: get is a str)
	// if setting, we set props above and continue chaining
	return !set ? this[0][0][get] : this;
};

module.exports = prop;
