import isNode from '../utils/isNode';

// appends dom nodes using those nodes directly or strings
const append = function( appendMe ) {
	// if passed a dom node directly, check it and append it
	if ( isNode(appendMe) ) {
		this.each(el => {
			return el.appendChild(appendMe.cloneNode());
		});
	}
	else if ( typeof appendMe === 'string' ) {
		let tmp = document.createElement('div');
		tmp.insertAdjacentHTML('afterbegin', appendMe);
		this.each(el => {
			return el.appendChild(tmp.firstChild.cloneNode(true));
		});
	}

	return this;
};

export default append;
