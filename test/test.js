/* globals describe, it, beforeEach*/

// const fs = require( 'fs' )
// const testHTML = fs.readFileSync( process.cwd() + '/testHTML/index.html' ).toString()
const assert = require( 'assert' )
const jsdom = require( 'mocha-jsdom' )

require( 'babel/register' )
const $ = require( '../app/app' )

describe( 'Quick.js Unit Tests', function() {

	jsdom()

	beforeEach( function() {
		document.body.innerHTML = '<span><div><p class="alreadyHere">Text Content<span>Inner Text Content</span></p></div></span><strong class="test-has"></strong><strong></strong>'
	} )

	afterEach( function() {
		document.body.innerHTML = '<span><div><p class="alreadyHere">Text Content<span></span></p></div></span><strong class="test-has"></strong><strong></strong>'
	} )

	describe( 'main app object should', function() {

		it( 'be an object', function() {
			assert.equal( typeof $( 'div' ), 'object' )
		} )

		it( 'return an object', function() {
			assert.equal( true, typeof $() === 'object' )
		} )
	} )

	describe( 'toArray ', function() {
		it( 'should return an array (obvs)', function() {
			const testObj = {
				0: 0,
				1: 1,
				2: 2
			}

			assert.equal( true, Array.isArray( $().toArray( testObj ) ) )
		} )
	} )

	describe( 'camelCase should', function() {
		it( 'camelCase a string', function() {
			assert.equal( 'testString', $().camelCase( 'test-string' ) )
		} )
	} )

	describe( 'isNode should', function() {
		it( 'verify node-y-ness correctly', function() {
			assert.equal( false, $().isNode( {} ) )
			assert.equal( true, $().isNode( document.createElement( 'div' ) ) )
			assert.equal( true, $().isNode( document.createTextNode( 'test' ) ) )
		} )
	} )

	describe( 'query should', function() {
		it( 'create a selection if passed a valid string', function() {
			assert.equal( 1, $( 'div' ).sel.length )
		} )

		it( 'create a selection if passed a valid string', function() {
			assert.equal( 2, $( 'span' ).sel.length )
			assert.equal( true, Array.isArray( $( 'p' ).sel ) )
		} )

		it( 'narrow search if passed parent param', function() {
			assert.equal( 1, $( 'span', $( '.alreadyHere' ).sel[0], 'bust' ).sel.length )
		} )

		it( 'have a cache length of 4 by now', function() {
			assert.equal( 4, Object.keys( $().cache ).length )
		} )

		// it( 'cache bust', function() {
		// 	document.body.innerHTML = '<span><div><span><div><span></span></div></span></div></span>'
		// 	assert.equal( 2, query('span', query('span').sel[0], 'bust' ).sel.length )
		// } )
	} )

	describe( 'add should', function() {
		it( 'increase the size of the selection', function() {
			assert.equal( 2, $( 'p' ).add( 'div' ).sel.length )
		} )
	} )

	// describe( 'after should', function() {
	// 	it( 'insert node before end of parent node', function() {
	// 		$( 'em' ).after( 'div' )
	//
	// 		assert.equal(
	// 			document.body.innerHTML,
	// 			'<span><div><em></em><p class="alreadyHere"><span></span></p></div></span>'
	// 		)
	// 	} )
	// } )

	describe( 'addClass should', function() {
		it( 'add one class to each item in the selection', function() {
			assert.equal( ' test', $( 'div' ).addClass( 'test' ).sel[0].className )
		} )

		it( 'add classes to each item in the selection', function() {
			assert.equal( ' test test1 test2', $( 'div' ).addClass( 'test1 test2' ).sel[0].className )
		} )

		it( 'not add extra class if class already applied', function() {
			assert.equal( 'alreadyHere', $( 'p' ).addClass( 'alreadyHere' ).sel[0].className )
		} )
	} )

	describe( 'has should', function() {
		it( 'return false', function() {
			assert.equal( false, $( 'strong' ).has( '.test-something-else' ) )
		} )

		it( 'return true', function() {
			assert.equal( true, $( 'strong' ).has( '.test-has' ) )
		} )

		it( 'filter selection', function() {
			assert.equal( 1, $( 'strong' ).has( '.test-has', 'filter' ).sel.length )
		} )
	} )

	describe( 'hasClass should', function() {
		it( 'return false', function() {
			assert.equal( false, $( 'strong' ).has( '.test-something-else' ) )
		} )

		it( 'return true', function() {
			assert.equal( true, $( 'strong' ).has( '.test-has' ) )
		} )

		it( 'filter selection', function() {
			assert.equal( 1, $( 'strong' ).has( '.test-has', 'filter' ).sel.length )
		} )
	} )

	describe( 'height should', function() {
		// var p = document.querySelector( 'p.alreadyHere' )
		it( 'get the height of the first el in the selection', function() {
			var div = document.createElement( 'div' )
			div.className = 'testHeight'
			document.body.appendChild( div )

			document.querySelector( 'div.testHeight' ).clientHeight = 500
			assert.equal( 500, $( 'div.testHeight' ).height() )
		} )

		// it( 'set the height of the selection', function() {
		// 	var div = document.createElement( 'div' )
		// 	div.className = 'testHeight'
		// 	document.body.appendChild( div )
		//
		// 	document.querySelector( 'div.testHeight' ).style = {}
		// 	$( 'div.testHeight' ).height( '750' )
		// 	assert.equal( 750, document.querySelector( 'div.testHeight' ).style.height )
		// } )
	} )

	describe( 'eq should', function() {
		it( 'return correct el from the selection', function() {
			assert.equal( true, $('span').sel[0].isEqualNode( $('span').eq(0).sel[0] ) )
			assert.equal( true, $('span').sel[1].isEqualNode( $('span').eq(1).sel[0] ) )
		} )

		it( 'return empty selection if out of bounds', function() {
			assert.equal( 0, $('span').eq(3).sel.length )
		} )
	} )

	describe( 'hide should', function() {
		it( 'add display none to the element', function() {
			assert.equal( 'none', $('p').hide().sel[0].style.display )
		} )

		it( 'do nothing if element already hidden', function() {
			$('p').sel[0].style.display = 'none'
			assert.equal( 'none', $('p').hide().sel[0].style.display )
		} )
	} )

	// describe( 'remove should', function() {
	// 	it( 'remove the selection from the dom', function() {
	// 		$( '.alreadyHere' ).remove()
	// 		// $().sCache = []
	// 		assert.equal( 0, $( '.alreadyHere', document, 'bust' )[0].length )
	// 	} )
	// } )

	describe( 'removeClass should', function() {

		it( 'remove one class from each item in the selection', function() {
			assert.equal( '', $('p').removeClass('alreadyHere').sel[0].className )
		} )

		it( 'remove classes from each item in the selection', function() {
			assert.equal( '', $('span').removeClass('test').sel[0].className )
			assert.equal( '', $('span').removeClass('test').sel[1].className )
		} )
	} )

	describe( 'show should', function() {
		it( 'add display block to the element', function() {
			$('p').sel[0].style.display = 'none'
			assert.equal( 'block', $('p').show().sel[0].style.display )
		} )

		it( 'do nothing if element already visible', function() {
			$('p').sel[0].style.display = 'flex'
			assert.equal( 'flex', $('p').show().sel[0].style.display )
		} )
	} )

	describe( 'text should', function() {
		it( 'return the current textContent of first node in selection', function() {
			assert.equal( 'Text Content Inner Text Content', $('.alreadyHere').text() )
		} )

		it( 'set the textContent of all nodes in selection to the passed in value', function() {
			assert.equal( 'butts', $('span').text('butts').sel[0].textContent )
		} )
	} )

	describe( 'toggleClass should', function() {

		it( 'remove alreadyHere from each item in the selection', function() {
			assert.equal(
				'',
				$('.alreadyHere', document.body, 'bust').toggleClass('alreadyHere').sel[0].className
			)
		} )

		it( 'add alreadyHere to each item in the selection', function() {
			assert.equal(
				' alreadyHere',
				$('p', document.body, 'bust').toggleClass('alreadyHere').sel[0].className
			)
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

	// describe( 'remove should', function() {
	// 	it( 'remove a node from the DOM', function() {
	// 		$('div').remove()

	// 		assert.equal(
	// 			document.body.innerHTML,
	// 			'<span><p class="alreadyHere"><span></span></p></span>'
	// 		)

	// 	} )

		// it( 'add classes to each item in the selection', function() {
		// 	assert.equal( ' test test1 test2', $('div').addClass('test1 test2')[0][0].className )
		// } )

		// it( 'not add extra class if class already applied', function() {
		// 	assert.equal( 'alreadyHere', $('p').addClass('alreadyHere')[0][0].className )
		// } )
	// } )
} )
