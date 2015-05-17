import stampit from 'stampit';

import on from './on';
import off from './off';
import addClass from './addClass';
import each from './each';
import setFn from './setFn';
import removeClass from './removeClass';

const Methods = stampit().methods({
	on,
	off,
	setFn,
	each,
	addClass,
	removeClass
});

export default Methods;
