// gets or sets the height on an element or array of elements
// @returns array of numbers if not setting height
// @returns this, if we're setting the height of elements
const width = function( set ) {
	this.each( el => el.style.width = `${set}` );
	return typeof set === 'undefined' ? this[0][0].clientWidth : this;
};

module.exports = width;
