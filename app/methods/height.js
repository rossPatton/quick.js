// gets or sets the height on an element or array of elements
// @returns array of numbers if not setting height
// @returns this, if we're setting the height of elements
const height = function( val ) {
	// set the height if a value was passed in
	if ( val ) {
		this.each( el => el.style.height = val );
	}

	// if just getting the height, return the height
	// else if setting the height, set height above and keep chaining
	return !height ? this[0][0].clientHeight : this;
};

export default height;
