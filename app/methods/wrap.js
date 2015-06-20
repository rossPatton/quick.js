import isNode from '../utils/isNode';

const wrap = function( wrap ) {
	// if passed a dom node directly, check it and append it
	if ( isNode(wrap) ) {
		this.each(el => {
			let w = wrap.cloneNode(true);
			w.appendChild(el.cloneNode(true));
			return el.parentNode.replaceChild(w, el);
		});
	}
	else if ( typeof wrap === 'string' ) {
		let tmp = document.createElement('div');
		tmp.insertAdjacentHTML('afterbegin', wrap);
		
		this.each(el => {
			let w = tmp.firstChild.cloneNode(true);
			w.appendChild(el.cloneNode(true));
			return el.parentNode.replaceChild(w, el);
		});
	}

	return this;
};

export default wrap;
