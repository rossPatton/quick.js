// hide an element, while waiting for css transitions to finish
// @TODO wait for css transitions
const show: Function = function(): Object {
	this.each( el => el.style.display = 'block' );
	return this;
};

export default show;
