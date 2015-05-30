import queryAll from '../utils/queryAll';

// gets or sets (safely) html content of a dom node
const add: Function = function(sel: string): Object {
	for ( let dom of queryAll(sel) ) {
		this[0].push( dom );
	}
	return this;
};

export default add;
