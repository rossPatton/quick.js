// remove all child nodes from an element
const empty: Function = function(): Object {
	this.each(el => {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
	});

	return this;
};

export default empty;
