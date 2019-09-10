#!/usr/bin/env node
const path = require('path');
const args = process.argv.slice(2);
const get = require('lodash.get');

if (!args.length && !process.env.npm_package_name) {
	console.error('No parameters specified and not run from npm package script');
	process.exit(1);
}

const tiappDir = require('../lib/tiapp-dir');
const root = tiappDir.sync(__dirname);

if (!root) {
	console.error(`Could not find tiapp.xml in directory tree: ${__dirname}`);
	process.exit(1);
}

const tiapp_path = path.join(root, 'tiapp.xml');
console.log(`Found tiapp.xml:  ${tiapp_path}`);

const tiapp = require('..').load(path.join(root, 'tiapp.xml'));

if (!args.length && process.env.npm_package_name) {
	const platforms = getPlatforms();

	platforms.forEach(platform => {
		// Logic for this will change once PR is merged and into SDK:  https://github.com/appcelerator/node-appc/pull/173
		const module_id = get(process.env, `npm_package_titanium_platform_${platform}_moduleid`) || get(process.env, `npm_package_titanium_moduleid`);
		removeModule(module_id, platform);
	});
	tiapp.write();

} else if (args.length) {
	removeModule(args[0], args[1]);
}

function removeModule(name, platform) {
	console.error(`removing module.  name: ${name} platform: ${platform}`);
	if (platform) {
		tiapp.removeModule(name, platform);
	} else {
		tiapp.removeModule(name);
	}
}


function getPlatforms() {

	const platforms = [];

	const keys = Object.keys(process.env);

	if (keys.some(key => {
		return key.startsWith('npm_package_titanium_platform_ios');
	})) {
		platforms.push('ios');
	}

	if (keys.some(key => {
		return key.startsWith('npm_package_titanium_platform_android');
	})) {
		platforms.push('android');
	}

	if (!platforms.length) {
		console.error(`titanium.platform not defined in package.json for package: ${process.env.npm_package_name}`);
		process.exit(1);
	}

	return platforms;
}
