/** @module "tiapp.xml" */

var fs = require('fs'),
	path = require('path'),
	util = require('util'),
	xmldom = require('xmldom');

/**
 * Determines the location of the tiapp.xml file. It will search the current directory,
 * and all other directories higher in the view hierarchy, in order. If it does not find
 * a tiapp.xml in any of these directories, null is returned.
 *
 * @example
 * var file = require('tiapp.xml').find();
 * if (file === null) {
 *   throw new Error('tiapp.xml not found');
 * } else {
 *   // do stuff
 * }
 *
 * @returns {String|null} The location of the tiapp.xml file, or null if not found.
 */
exports.find = function find() {
	var cwd = process.cwd(),
		parts = cwd.split(path.sep);

	// remove empty element
	if (parts[0] === '') {
		parts.shift();
	}

	// iterate up through hierarchy to try and find a tiapp.xml
	for (var i = 0, len = parts.length; i < len; i++) {
		var p = (/^win/.test(process.platform) ? '' : path.sep) +
			path.join.apply(path, parts.slice(0, len-i).concat('tiapp.xml'));
		if (fs.existsSync(p) && fs.statSync(p).isFile()) {
			return p;
		}
	}

	return null;
};

/**
 * Parses the given string as xml and returns a new {@link Tiapp} instance.
 *
 * @example
 * // read tiapp.xml, give it to parse()
 * var fs = require('fs');
 * var xml = fs.readFileSync('/path/to/tiapp.xml', 'utf8');
 * var tiapp = require('tiapp.xml').parse(xml);
 *
 * @example
 * // Parse with a string of xml
 * var tiapp = require('tiapp.xml').parse('<ti:app><!-- ... --></ti:app>');
 *
 * @param {String} [xml] XML string to be parsed, presumedly a tiapp.xml
 *
 * @returns {Tiapp} A new instance of {@link Tiapp} based on the parsed xml
 * @throws {TiappError} Must be valid xml in tiapp.xml format
 */
exports.parse = function parse(xml, file) {

	// make sure xml is a string
	if (!xml || !isString(xml)) {
		throw new TiappError('Bad argument. xml must be a string.', xml);
	}

	// parse the xml
	var doc = new xmldom.DOMParser().parseFromString(xml);

	// make sure it's actually a tiapp.xml
	if (!doc || !doc.documentElement) {
		throw new TiappError('No XML document created', xml);
	} else if (doc.documentElement.nodeName !== 'ti:app') {
		throw new TiappError('Parsed XML is not a tiapp.xml', xml);
	}

	// create an instance of Tiapp
	return new Tiapp(file, doc);
};

/**
 * Parses the given file as a tiapp.xml file and returns a new {@link Tiapp} instance. If a file is not
 * provided, {@link Tiapp#find|find()} will attempt to find one automatically. The file is
 * validated, read, and then {@link Tiapp#parse|parse()} is called.
 *
 * @example
 * // load with a file path
 * var tiapp = require('tiapp.xml').load('/path/to/tiapp.xml');
 *
 * @example
 * // load without a file path, letting find() try to find it for you
 * var tiapp = require('tiapp.xml').load();
 *
 * @param {String} [file] Path to the tiapp.xml file
 *
 * @returns {Tiapp} A new instance of {@link Tiapp} based on the loaded file
 * @throws {TiappError} Must be able to find a tiapp.xml file
 */
exports.load = function load(file) {

	// make sure we have a file
	if (typeof file !== 'undefined' && !isString(file)) {
		throw new TiappError('Bad argument. If defined, file must be a string.', file);
	}
	file = file || exports.find();
	if (!file || (file && !fs.existsSync(file))) {
		throw new TiappError('tiapp.xml not found', file);
	}

	// parse the file
	return exports.parse(fs.readFileSync(file, 'utf8'), file);
};

/**
 * Creates an instance of Tiapp
 * @constructor
 *
 * @param {String} [file] Path to the tiapp.xml file to load. If one is not provided,
 *                        {@link Tiapp#find|find()} will attempt to find and load one automatically.
 * @param {Object} [doc] The XML document object used internally for Tiapp operations
 *
 * @readonly
 * @property {String} file Path to the tiapp.xml file that loaded this instance
 * @property {Object} doc XML document object, generated by {@link Tiapp#parse|parse()}. Generally you'll
 *                        use the Tiapp API and won't access this directly. If you need it, though, it is
 *                        available. Its usage can be found at https://github.com/jindw/xmldom.
 *
 * @returns {Tiapp} An instance of {@link Tiapp}
 */
function Tiapp(file, doc) {
	Object.defineProperty(this, 'file', {
		configurable: true,
		enumerable: true,
		writable: false,
		value: file
	});
	this.doc = doc;
}

/**
 * Creates an instance of TiappError
 * @constructor
 * @augments Error
 *
 * @example
 * try {
 *   throw new TiappError('message', { foo: 123 });
 * } catch (e) {
 *   console.log(e.message === 'message' && e.data.foo === 123); // true
 * }
 *
 * @param {String} [message] The message describing the error
 * @param {*} [data] Additional data associated with the error
 *
 * @property {*} data Additional data associated with the error
 * @property {String} message The message describing the error
 * @property {Object} stack Stack trace for the error
 * @property {String} type The error type
 *
 * @returns {TiappError} An instance of {@link TiappError}
 */
function TiappError(message, data) {
	Error.call(this);
	Error.captureStackTrace(this, arguments.callee);
	this.message = message || '';
	this.name = 'TiappError';
	this.data = data;
}
util.inherits(TiappError, Error);

// utils
function isString(o) {
	return Object.prototype.toString.call(o) === '[object String]';
}