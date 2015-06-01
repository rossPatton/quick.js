// get prop (first match) or set prop on all matching
const prop = function( get: string, set: any ): Object {
	// if set if string, we pass it as the value
	// else we just pass in the config object
	// ternary lets ppl pass in a value here, or a config object
	if ( set ) {
		this.each(el => {
			this[0][0][get] = set;
		});
	}

	// if getting, just return the prop (bracket notation needed: get is a str)
	// if setting, we set props above and continue chaining
	return !set ? this[0][0][get] : this;
};

export default prop;
