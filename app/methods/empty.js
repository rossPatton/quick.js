// adds a class to the current selection
const empty: Function = function(): Object {
	this.each(el => {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
	});

	return this;
};

export default empty;
