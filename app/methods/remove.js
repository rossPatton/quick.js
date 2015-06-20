// remove nodes from the dom
const remove = function() {
	this.each( el => el.parentNode.removeChild( el ) );
	return this;
};

export default remove;
