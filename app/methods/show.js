// hide an element, while waiting for css transitions to finish
// @TODO wait for css transitions
const show = function() {
	this.each( el => el.style.display = 'block' );
	return this;
};

module.exports = show;
