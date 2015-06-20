// get attribute (first match) or set attribute on all matching
const attr = function( get, set ) {
	if ( set ) {
		this.each( el => el.setAttribute( get, set ) );
	}

	// if getting, return the attr
	// if setting, set attributes and continue chaining
	return !set ? this[0][0].getAttribute( get ) : this;
};

export default attr;
