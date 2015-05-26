// gets or sets the height on an element or array of elements
// @returns array of numbers if not setting height
// @returns this, if we're setting the height of elements
const width: Function = function( width: string ): number | Array {
	if ( typeof width === 'undefined' ) {
		return this[0][0].clientWidth;
	}

	for ( let dom of this[0] ) {
		dom.style.width = `${width}`;
	}

	return this;
};

export default width;
