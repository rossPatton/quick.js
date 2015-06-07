import isNode from '../utils/isNode';

// appends dom nodes using those nodes directly or strings
const before: Function = function( prependMe: string | Object ) {
	// if passed a dom node directly, check it and append it
	if ( isNode(prependMe) ) {
		this.each(el => {
			return el.parentNode.insertBefore(prependMe.cloneNode(), el.previousSibling);
		});
	}
	// return dom.insertBefore(tmp.firstChild.cloneNode(true), dom.firstChild);
	else if ( typeof prependMe === 'string' ) {
		let tmp: Object = document.createElement('div');
		tmp.insertAdjacentHTML('afterbegin', prependMe);
		this.each(el => {
			return el.parentNode.insertBefore(tmp.firstChild.cloneNode(true), el.previousSibling);
		});
	}

	return this;
};

export default before;
