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
	var platforms = getPlatforms();

	platforms.forEach(platform => {
		removeModule(process.env.npm_package_name, platform);
	});
	tiapp.write();

} else if (args.length) {
	removeModule(args[0], args[1]);
}

function removeModule(name, platform) {
	console.error('removing module.  name: ' + name + ' platform: ' + platform);
	if (platform) {
		tiapp.removeModule(name, platform);
	} else {
		tiapp.removeModule(name);
	}
}


function getPlatforms() {

	var platforms = [];

	process.env.npm_package_titanium_platform_0 && platforms.push(process.env.npm_package_titanium_platform_0);
	process.env.npm_package_titanium_platform_1 && platforms.push(process.env.npm_package_titanium_platform_1);
	process.env.npm_package_titanium_platform_2 && platforms.push(process.env.npm_package_titanium_platform_2);

	if (!platforms.length) {
		console.error('titanium.platform not defined in package.json for package: ' + process.env.npm_package_name);
		process.exit(1);
	}

	return platforms;
}
