#!/usr/bin/env node
var path = require('path');
var args = process.argv.slice(2);

if (!args.length && !process.env.npm_package_name) {
	console.error('No parameters specified and not run from npm package script');
	process.exit(1);
}

var tiappDir = require('../lib/tiapp-dir');
var root = tiappDir.sync(__dirname);

if (!root) {
	console.error('Could not find tiapp.xml in directory tree: ' + __dirname);
	process.exit(1);
}

var tiapp = require('../lib/tiapp-xml').load(path.join(root, 'tiapp.xml'));

if (!args.length && process.env.npm_package_name) {
	var platforms = process.env.npm_package_titanium_platform;

	if (!platforms) {
		console.error('titanium.platform not defined in package.json for package: ' + process.env.npm_package_name);
		process.exit(1);
	}
	removeModule(process.env.npm_package_name);

	if (!Array.isArray(platforms)) {
		platforms = [ platforms ];
	}

	platforms.forEach(platform => {
		removeModule(process.env.npm_package_name, platform, process.env.npm_package_version);
	});

} else if (args.length) {
	removeModule(args[0], args[1]);
}

function removeModule(name, platform) {
	if (platform) {
		tiapp.removeModule(name, platform);
	} else {
		tiapp.removeModule(name);
	}
}
