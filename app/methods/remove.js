// remove nodes from the dom
const remove: Function = function(): Object {
	this.each( el => el.parentNode.removeChild(el) );
	return this;
};

export default remove;
