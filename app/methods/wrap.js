import isNode from '../utils/isNode';

const wrap: Function = function( wrap: string | Object ): Object {
	// if passed a dom node directly, check it and append it
	if ( isNode(wrap) ) {
		this.each(el => {
			let w: Object = wrap.cloneNode(true);
			w.appendChild(el.cloneNode(true));
			return el.parentNode.replaceChild(w, el);
		});
	}
	else if ( typeof wrap === 'string' ) {
		let tmp: Object = document.createElement('div');
		tmp.insertAdjacentHTML('afterbegin', wrap);
		this.each(el => {
			let w: Object = tmp.firstChild.cloneNode(true);
			w.appendChild(el.cloneNode(true));
			return el.parentNode.replaceChild(w, el);
		});
	}

	return this;
};

export default wrap;
