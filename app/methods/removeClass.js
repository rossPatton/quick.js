// remove classes
const removeClass = function( classes: string ): Object {
	this.each(el => {
		classes.split(' ').forEach(c => {
			return el.className.indexOf(c) !== -1 ? el.classList.remove(c) : '';
		});
	});

	return this;
};

export default removeClass;
