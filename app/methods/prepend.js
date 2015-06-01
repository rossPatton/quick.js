import isNode from '../utils/isNode';

// appends dom nodes using those nodes directly or strings
const prepend: Function = function( prependMe: string | Object ): Object {
	// if passed a dom node directly, check it and append it
	if ( isNode(prependMe) ) {
		this.each(el => {
			return el.insertBefore( prependMe.cloneNode(), el.firstChild );
		});
	}
	else if ( typeof prependMe === 'string' ) {
		let tmp: Object = document.createElement('div');
		tmp.insertAdjacentHTML( 'afterbegin', prependMe );
		this.each(el => {
			return el.insertBefore( tmp.firstChild.cloneNode(true), el.firstChild );
		});
	}

	return this;
};

export default prepend;
