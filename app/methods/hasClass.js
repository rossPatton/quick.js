// return true if every element in selection has all the classes passed in
const hasClass = function( classes: string ): Object {
	if ( typeof classes !== 'string' ) {
		throw Error( 'hasClass needs a string' );
	}

	classes = classes.split(' ');
	return this[0].every(el => {
		return classes.every(c => {
			return el.className.indexOf(c) !== -1
		});
	});
};

export default hasClass;
