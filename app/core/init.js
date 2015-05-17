import stampit from 'stampit';
import queryAll from '../utils/queryAll';

const Init = function( str: string ): Object {
	return stampit().enclose(function() {
		if ( typeof str === 'string' ) {
			this.originalString = str;
			this.selection = queryAll(str);
		}

		return this;
	});
};

module.exports = Init;
