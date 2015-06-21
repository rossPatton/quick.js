// const fs = require( 'fs' );
// const testHTML = fs.readFileSync( process.cwd() + '/testHTML/index.html' ).toString();
const assert = require( 'assert' );
const jsdom = require( 'mocha-jsdom' );
const should = require( 'chai' ).should();

require( 'babel/register' );
const $ = require( '../app/app' );

describe( 'Quick.js Unit Tests', function() {

	jsdom();

	beforeEach( function() {
		document.body.innerHTML = '<span><div><p class="alreadyHere"><span></span></p></div></span>';
	} );

	describe( 'main app object', function() {
		it( 'should be an object', function() {
			assert.equal( typeof $( 'div' ), 'object' );
		} );
	} );

	describe( 'toArray ', function() {
		const toArray = require( '../app/utils/toArray' );

		it( 'should return an array (obvs)', function() {
			const testObj = {
				0: 0,
				1: 1,
				2: 2
			};

			assert.equal( true, Array.isArray( toArray( testObj ) ) );
		} );
	} );

	describe( 'camelCase should', function() {
		const camelCase = require( '../app/utils/camelCase' );

		it( 'camelCase a string', function() {
			assert.equal( 'testString', camelCase('test-string') );
		} );
	} );

	describe( 'isNode should', function() {
		const isNode = require( '../app/utils/isNode' );

		it( 'verify node-y-ness correctly', function() {
			assert.equal( false, isNode( {} ) );
			assert.equal( true, isNode( document.createElement( 'div' ) ) );
			assert.equal( true, isNode( document.createTextNode( 'test' ) ) );
		} );
	} );

	describe( 'query should', function() {
		const query = require( '../app/utils/query' );

		it( 'create a selection if passed a valid string', function() {
			assert.equal( 1, query('div').sel.length );
		} );

		it( 'create a selection if passed a valid string', function() {
			assert.equal( 2, query('span').sel.length );
			assert.equal( true, Array.isArray( query('p').sel ) );
		} );

		it( 'narrow search if passed parent param', function() {
			assert.equal( 1, query('span', query('span').sel[0] ).sel.length );
		} );

		it( 'have a cache length of 4 by now', function() {
			assert.equal( 4, Object.keys( query('span').sCache ).length );
		} );

		// it( 'cache bust', function() {
		// 	document.body.innerHTML = '<span><div><span><div><span></span></div></span></div></span>';
		// 	assert.equal( 2, query('span', query('span').sel[0], 'bust' ).sel.length );
		// } );
	} );

	describe( 'add should', function() {
		it( 'increase the size of the selection', function() {
			assert.equal( 2, $('p').add('div')[0].length );
		} );
	} );

	describe( 'addClass should', function() {
		it( 'add one class to each item in the selection', function() {
			assert.equal( ' test', $('div').addClass('test')[0][0].className );
		} );

		it( 'add classes to each item in the selection', function() {
			assert.equal( ' test test1 test2', $('div').addClass('test1 test2')[0][0].className );
		} );

		it( 'not add extra class if class already applied', function() {
			assert.equal( 'alreadyHere', $('p').addClass('alreadyHere')[0][0].className );
		} );
	} );
} );
