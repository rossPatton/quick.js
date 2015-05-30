// gets or sets the height on an element or array of elements
// @returns array of numbers if not setting height
// @returns this, if we're setting the height of elements
const height: Function = function( height: string ): number | Array {
	if ( typeof height === 'undefined' ) {
		return this[0][0].clientHeight;
	}

	for ( let el of this[0] ) {
		el.style.height = `${height}`;
	}

	return this;
};

export default height;
