// hide an element, while waiting for css transitions to finish
// @TODO wait for css transitions
const hide = function() {
	this.each( el => el.style.display = 'none' );
	return this;
};

export default hide;
