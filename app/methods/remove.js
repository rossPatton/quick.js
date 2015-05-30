// gets or sets (safely) html content of a dom node
const remove: Function = function(): Object {
	this.each(el => {
		return el.parentNode.removeChild(el);
	});
	return this;
};

export default remove;
