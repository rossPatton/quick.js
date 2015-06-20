// gets or sets the height on an element or array of elements
// @returns array of numbers if not setting height
// @returns this, if we're setting the height of elements
const height = function( height ) {
	// set the height if a height was passed in
	if ( height ) {
		this.each( el => el.style.height = height );
	}

	// if just getting the height, return the height
	// else if setting the height, set height above and keep chaining
	return !height ? this[0][0].clientHeight: this;
};

export default height;
