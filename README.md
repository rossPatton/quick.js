[![Code Climate](https://codeclimate.com/github/rossPatton/quick.js/badges/gpa.svg)](https://codeclimate.com/github/rossPatton/quick.js) [![Test Coverage](https://codeclimate.com/github/rossPatton/quick.js/badges/coverage.svg)](https://codeclimate.com/github/rossPatton/quick.js/coverage)

# quick.js
Lightweight, Modular, Isomorphic, DOM Traversal Library

inspired by [sprintjs](https://github.com/bendc/sprint), very rough, use at own risk, etc etc. 

goal is to match the functionality (more or less) of [jQuery dom manipulation methods](https://api.jquery.com/category/manipulation/), using the latest native methods. Not a library to use if you have to support legacy browsers.

Ideally will work on the server side (like cheerio) as well as the front-end, and will be require-able on a method by method basis like lodash (eventually). Selections are cached by default, and the cache is bustable (props to [Eric Mann](http://ttmm.io/tech/selector-caching-jquery/)).

If you want to contribute, I could use a little help with the isomorphic bits and eventually a little help with testing would be nice.

When coverage hits around 80-90% consider this library 'useable', but changes may still occur.
