const fs     = require( 'fs' )
const assert = require( 'assert' )
const jsdom  = require( 'jsdom' )
const dom    = fs.readFileSync( __dirname + '/testDOM.html' ).toString()

require( 'babel/register' )
const $ = require( '../app/core/app' )

describe( 'Quick.js Unit Tests', function() {
	this.timeout( 0 )

	window = {}

	// pull in local html for testing
	// maybe later pull in WIRED for funsies
	before( function( done ) {

		jsdom.env( dom, function( err, win ) {
			window = win
			document = window.document
			require( 'classlist-polyfill' )
			done()
		} )

	} )

	describe( 'main app object should', function() {

		it( 'be an object', function() {
			assert.ok( typeof $( 'div' ) === 'object' )
		} )

		it( 'return an object', function() {
			assert.ok( typeof $() === 'object' )
		} )

	} )

	describe( 'toArray should', function() {

		it( 'return an array (obvs)', function() {
			const testObj = {
				0: 0,
				1: 1,
				2: 2
			}

			assert.ok( Array.isArray( $().toArray( testObj ) ) )
		} )

		it( 'throw a TypeError if param not object', function() {
			assert.throws(
				$().toArray,
				TypeError,
				'toArray requires an array like object'
			)
		} )

	} )

	describe( 'camelCase should', function() {

		it( 'camelCase a string', function() {
			assert.equal( 'testString', $().camelCase( 'test-string' ) )
		} )

		it( 'throw a TypeError if param not object', function() {
			assert.throws(
				$().camelCase,
				TypeError,
				'camelCase needs a string'
			)
		} )

	} )

	describe( 'isNode should', function() {

		it( 'verify node-y-ness correctly', function() {
			assert.ok( !$().isNode( {} ) )
			assert.ok( $().isNode( document.createElement( 'div' ) ) )
			assert.ok( $().isNode( document.createTextNode( 'test' ) ) )
		} )

	} )

	describe( 'query should', function() {

		after( function() {
			$().clear()
		} )

		it( 'create a selection if passed a valid string', function() {
			assert.equal( 9, $( 'div' ).sel.length )
		} )

		it( 'create a selection if passed a valid string', function() {
			assert.equal( 1, $( 'span' ).sel.length )
			assert.ok( Array.isArray( $( 'p' ).sel ) )
		} )

		it( 'narrow search if passed parent param', function() {
			// get length of narrowed selection
			const isNarrowed = $( 'p', {
				parent: $( 'div.even.test-text' ).sel[0]
			} ).sel.length

			assert.equal( 1, isNarrowed )
		} )

		// 1 for each selection,
		// 1 for the parent we used to narrow in the last test
		it( 'have a cache length of 5 by now', function() {
			assert.equal( 5, Object.keys( $().cache ).length )
		} )

		it( 'bust cache if bust prop passed in', function() {
			// should be 3, not 2
			const isBusted = $( 'p', {
				bust: true
			} ).sel.length

			assert.equal( 9, isBusted )
		} )
	} )

	// add increases selection size
	// @TODO right now it's returning a value
	// that is insanely high
	describe( 'add should', function() {

		it( 'increase the size of the selection', function() {
			assert.equal( 9, $( 'p' ).sel.length )
			assert.equal( 9, $( 'div' ).sel.length )

			assert.equal( 18, $( 'p' ).add( 'div' ).sel.length )
		} )

	} )

	describe( 'addClass should', function() {

		it( 'add one class to each item in the selection', function() {
			assert.equal(
				'odd test-text test',
				$( 'div' ).addClass( 'test' ).sel[0].className
			)
		} )

		it( 'add classes to each item in the selection', function() {
			assert.equal(
				'odd test-text test test1 test2',
				$( 'div' ).addClass( 'test1 test2' ).sel[0].className
			)
		} )

		it( 'not add extra class if class already applied', function() {
			assert.equal(
				'already-here',
				$( '.already-here' ).addClass( 'already-here' ).sel[0].className
			)
		} )

	} )

	describe( 'after should', function() {

		it( 'insert node before end of PARENT node', function() {
			$( '#after-test' ).after( '<em></em>' )

			assert.equal(
				$( 'section' ).sel[2].innerHTML,
				'<b id=\"after-test\"></b><em></em>'
			)
		} )

		it( 'insert node before end of PARENT node (with dom)', function() {
			var em = document.createElement( 'em' )
			$( '#second' ).after( em )

			assert.equal(
				$( 'section' ).sel[1].innerHTML,
				'\n\t<div id=\"second\" class=\"test test1 test2\">Test</div><em></em>\n'
			)
		} )

		it( 'should return this (even if incorrect types passed)', function() {
			assert.ok( typeof $( '#second' ).after( {} ) === 'object' )
		} )

	} )

	describe( 'append should', function() {

		it( 'append dom node to the end of the dom node ( string )', function() {
			$( '#append-test' ).append( '<p></p>' )
			assert.equal(
				$( '#append-test' ).sel[0].innerHTML,
				'<p></p>'
			)
		} )

		it( 'append dom node to the end of the dom node ( node )', function() {
			var em = document.createElement( 'em' )
			$( '#append-test' ).append( em )

			assert.equal(
				$( '#append-test' ).sel[0].innerHTML,
				'<p></p><em></em>'
			)
		} )

		it( 'should return this (even if incorrect types passed)', function() {
			assert.ok( typeof $( '#second' ).append( {} ) === 'object' )
		} )

	} )

	describe( 'attr should', function() {

		it( 'get the attribute of the first node in a selection', function() {
			assert.equal(
				$( '#attr-test' ).attr( 'data-test' ),
				'im an attribute'
			)
		} )

		it( 'set attributes of the selection', function() {
			$( '#attr-test' ).attr( 'data-test', 'i say this now' )

			assert.equal(
				$( '#attr-test' ).attr( 'data-test' ),
				'i say this now'
			)
		} )

		it( 'should return this only if setting', function() {
			assert.ok( typeof $( '#attr-test' ).attr( 'data-test' ) === 'string' )
			assert.ok( typeof $( '#attr-test' ).attr( 'data-test', 'i say this now' ) === 'object' )
		} )

	} )

	describe( 'before should', function() {

		it( 'insert node after start of PARENT node', function() {
			$( '#test-before' ).before( '<em></em>' )

			assert.equal(
				$( '#test-before-wrap' ).sel[0].innerHTML,
				'<em></em><strong id="test-before"></strong>'
			)
		} )

		it( 'insert node after start of PARENT node (with dom)', function() {
			var em = document.createElement( 'em' )
			$( '#test-before' ).before( em )

			assert.equal(
				$( '#test-before-wrap' ).sel[0].innerHTML,
				'<em></em><em></em><strong id="test-before"></strong>'
			)
		} )

		it( 'should return this (even if incorrect types passed)', function() {
			assert.ok( typeof $( '#second' ).before( {} ) === 'object' )
		} )

	} )

	describe( 'css should', function() {

		it( 'get styles from node ( string )', function() {
			document.querySelector( '#first' ).style.display = 'inline'

			assert.equal(
				'inline',
				$( '#first' ).css( 'display' )
			)
		} )

		it( 'set styles on nodes ( object )', function() {
			$( '#first' ).css( {
				display: 'inline-block',
				height: '500px'
			} )

			assert.equal(
				'inline-block',
				$( '#first' ).css( 'display' )
			)

			assert.equal(
				'500px',
				$( '#first' ).css( 'height' )
			)
		} )

		it( 'return this if setting or passed incorrect type', function() {
			assert.ok( typeof $( '#first' ).css( {} ) === 'object' )
			assert.ok( typeof $( '#first' ).css() === 'object' )
		} )

	} )

	describe( 'empty should', function() {

		it( 'remove all child nodes from each node in the selection', function() {
			$().clear()
			$( '#test-before-wrap' ).empty()

			assert.equal(
				$( '#test-before-wrap' ).sel[0].innerHTML,
				''
			)
		} )

	} )

	describe( 'extend should', function() {

		it( 'add a new method to the $ prototype', function() {
			var testMethod = function() {
				return console.log( 'test' )
			}

			$().extend( {
				test: testMethod
			} )

			assert.ok( typeof Object.getPrototypeOf( this )['test'] !== 'undefined' )
		} )

	} )

	describe( 'has should', function() {

		it( 'return false', function() {
			assert.equal( false, $( 'strong' ).has( '.test-something-else' ) )
		} )

		it( 'return true', function() {
			assert.ok( $( 'strong' ).has( '.test-has' ) )
		} )

		it( 'filter selection', function() {
			assert.equal( 1,
				$( 'strong' ).has( '.test-has', 'filter' ).sel.length
			)
		} )

	} )

	describe( 'hasClass should', function() {

		it( 'returns false', function() {
			assert.ok(
				!$( '.has-class-test', {
					bust: true
				} ).hasClass( 'class77' )
			)
		} )

		it( 'returns true if one class given', function() {
			assert.ok(
				$( '.has-class-test', {
					bust: true
				} ).hasClass( 'class1' )
			)
		} )

		it( 'returns true if more than one class is given', function() {
			assert.ok(
				$( '.has-class-test', {
					bust: true
				} ).hasClass( 'class1 class3' )
			)
		} )
	} )

	describe( 'height should', function() {

		it( 'set the height of the selection', function() {
			$( '#test-height' ).height( '750px' )
			assert.equal( '750px', document.querySelector( '#test-height' ).style.height )
		} )

		it( 'get the height of the first el in the selection', function() {
			document.querySelector( '#test-height' ).clientHeight = 750
			assert.equal( 750, $( '#test-height', {
				bust: true
			} ).height() )
		} )

	} )

	describe( 'htmlshould', function() {

		it( 'set the html of each node in the selection', function() {
			$( '#test-html' ).html( '<p>butts</p>' )
			assert.equal(
				'<p>butts</p>',
				document.querySelector( '#test-html' ).innerHTML
			)
		} )

		it( 'get the html of the first item in the selection', function() {
			assert.equal(
				'<p>butts</p>',
				$( '#test-html' ).html()
			)
		} )

	} )

	describe( 'eq should', function() {

		it( 'return correct el from the selection', function() {
			assert.ok(
				$( 'div' ).sel[0].isEqualNode( $( 'div' ).eq( 0 ).sel[0] )
			)
			assert.ok(
				$( 'div' ).sel[1].isEqualNode( $( 'div' ).eq( 1 ).sel[0] )
			)
		} )

		it( 'return empty selection if out of bounds', function() {
			assert.equal( 0, $( 'span' ).eq( 3 ).sel.length )
		} )

	} )

	describe( 'hide should', function() {

		it( 'add display none to the element', function() {
			assert.equal( 'none', $( 'p' ).hide().sel[0].style.display )
		} )

		it( 'do nothing if element already hidden', function() {
			$( 'p' ).sel[0].style.display = 'none'
			assert.equal( 'none', $( 'p' ).hide().sel[0].style.display )
		} )

	} )

	describe( 'on should' , function() {
		var test = function() { return console.log( 'clicked' ) }

		it( 'should push created listener to an array', function() {
			assert.ok( $().listeners.length === 0 )
			$( '#test-on' ).on( 'click', test )
			assert.ok( $().listeners.length === 1 )
		} )

		it( 'should always return this', function() {
			assert.ok( typeof $( 'div' ).on( 'click' ) === 'object' )
		} )

	} )

	describe( 'prepend should', function() {

		it( 'prepend dom node to the start of the dom node ( string )', function() {
			$( '#prepend-test' ).prepend( '<p></p>' )

			assert.equal(
				'<p></p>',
				$( '#prepend-test' ).sel[0].innerHTML
			)
		} )

		it( 'prepend dom node to the start of the dom node ( node )', function() {
			var em = document.createElement( 'em' )
			$( '#prepend-test' ).prepend( em )

			assert.equal(
				'<em></em><p></p>',
				$( '#prepend-test' ).sel[0].innerHTML
			)
		} )

		it( 'should return this (even if incorrect types passed)', function() {
			assert.ok( typeof $( '#second' ).prepend( {} ) === 'object' )
		} )

	} )

	describe( 'prop should', function() {

		it( 'get the property of the first node in a selection', function() {
			assert.equal(
				'first',
				$( '#first' ).prop( 'id' )
			)
		} )

		it( 'set properties of the selection', function() {
			$( '#first' ).prop( 'id', 'not-first' )

			assert.equal(
				'not-first',
				$( '#first' ).prop( 'id' )
			)
		} )

		it( 'should return this only if setting', function() {
			assert.ok( typeof $( '#first' ).prop( 'id' ) === 'string' )
			assert.ok( typeof $( '#first' ).prop( 'id', 'not-first' ) === 'object' )
		} )

	} )

	describe( 'remove should', function() {

		it( 'remove multiple selections from the dom', function() {
			assert.equal( 2,
				document.querySelectorAll( '.get-rid-of-me' ).length
			)
			$( '.get-rid-of-me' ).remove()
			assert.equal( 0,
				document.querySelectorAll( '.get-rid-of-me' ).length
			)
		} )

	} )

	describe( 'removeClass should', function() {

		it( 'remove one class from each item in the selection', function() {
			assert.equal(
				'',
				$( 'article' ).removeClass( 'test-remove-class' ).sel[0].className
			)
		} )

		it( 'do nothing if selection doesnt have class', function() {
			assert.equal(
				'',
				$( 'section' ).removeClass( 'test-remove-class' ).sel[0].className
			)
		} )

	} )

	describe( 'show should', function() {

		it( 'add display block to the element', function() {
			$( 'p' ).sel[0].style.display = 'none'
			assert.equal( 'block', $( 'p' ).show().sel[0].style.display )
		} )

		it( 'do nothing if element already visible', function() {
			$( 'p' ).sel[0].style.display = 'flex'
			assert.equal( 'flex', $( 'p' ).show().sel[0].style.display )
		} )

	} )

	describe( 'size should', function() {

		it( 'return the current length of the selection', function() {
			$().clear()
			assert.equal( 2, $( 'article' ).size() )
		} )

	} )

	describe( 'slice should', function() {

		it( 'return a subset of the selection', function() {
			assert.equal( 1, $( 'article' ).slice( 0, 1 ).sel.length )
		} )

	} )

	describe( 'text should', function() {

		it( 'return the current textContent of first node in selection', function() {
			assert.equal(
				'\n\t Test 2 \n\t \n\t I\'m a span \n',
				$( '.even.test-text' ).text()
			)
		} )

		it( 'set the textContent of all nodes in selection to the passed in value', function() {
			assert.equal(
				'butts',
				$( '.even.test-text' ).text( 'butts' ).sel[0].textContent
			)
		} )

	} )

	describe( 'toggleClass should', function() {

		it( 'remove test-toggle from each item in the selection', function() {
			var classList = $( '.test-toggle', {
				bust: true
			} ).toggleClass( 'test-toggle' ).sel[0].className

			assert.equal( 'test-toggle-1', classList )
		} )

		it( 'add test-toggle to each item in the selection', function() {
			var classList = $( '.test-toggle-1', {
				bust: true
			} ).toggleClass( 'test-toggle' ).sel[0].className

			assert.equal( 'test-toggle-1 test-toggle', classList )
		} )

	} )

	describe( 'width should' , function() {

		it( 'set the element width', function() {
			assert.ok( typeof $( '.test-has' ).width( '80px' ) === 'object' )
		} )

		it( 'get the element width', function() {
			$( '.test-has' ).sel[0].clientWidth = '80px';
			assert.equal( '80px', $( '.test-has' ).width() )
		} )

	} )

	describe( 'wrap should', function() {

		it( 'wrap selection with passed in dom node (string)', function() {
			$( '#test-wrap' ).wrap( '<p id="test-wrap-wrap"></p>' )

			assert.equal(
				1,
				$( '#test-wrap-wrap' ).size()
			)

			assert.equal(
				'<em id="test-wrap"></em>',
				$( '#test-wrap-wrap' ).sel[0].innerHTML
			)
		} )

		it( 'prepend dom node to the start of the dom node ( node )', function() {
			var iHeardYouLikeWraps = document.createElement( 'div' )
			iHeardYouLikeWraps.className = 'i-heard-you-like-wraps'

			$( '#test-wrap-wrap' ).wrap( iHeardYouLikeWraps )

			assert.equal(
				'<p id="test-wrap-wrap"><em id="test-wrap"></em></p>',
				$( '.i-heard-you-like-wraps' ).sel[0].innerHTML
			)
		} )

		it( 'should return this (even if incorrect types passed)', function() {
			assert.ok( typeof $( '#second' ).wrap( {} ) === 'object' )
			assert.ok( typeof $( '#second' ).wrap() === 'object' )
		} )

	} )

} )
