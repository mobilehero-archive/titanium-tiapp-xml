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

const tiapp = require('../lib/tiapp-xml').load(path.join(root, 'tiapp.xml'));

if (!args.length && process.env.npm_package_name) {
	const platforms = getPlatforms();

	platforms.forEach(platform => {

		const module_id = get(process.env, `npm_package_titanium_platform_${platform}_moduleid`);

		// This is not supported yet but will be once PR is merged and into SDK:  https://github.com/appcelerator/node-appc/pull/173
		// const module_version = get(process.env, `npm_package_titanium_platform_${platform}_version`) || get(process.env, `npm_package_titanium_version`) || get(process.env, `npm_package_version`);
		const module_version = get(process.env, `npm_package_version`);  // using this temporarily as this is the method 8.1.0 SDK currently uses.
		removeModule(module_id, platform);
		addModule(module_id, platform, module_version);
	});
	tiapp.write();

} else if (args.length) {
	removeModule(args[0], args[1]);
	addModule(args[0], args[1], args[2]);
	tiapp.write();
}

function addModule(name, platform, version) {

	console.error(`installing module.  name: ${name} platform: ${platform} version: ${version}`);
	if (platform && version) {
		tiapp.setModule(name, { platform: platform, version: version  });
	} else if (!platform) {
		tiapp.setModule(name, { version: version  });
	} else if (!version) {
		tiapp.setModule(name, { platform: platform });
	}
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

	process.env.npm_package_titanium_platform_ios_moduleid && platforms.push('ios');
	process.env.npm_package_titanium_platform_android_moduleid && platforms.push('android');

	if (!platforms.length) {
		console.error(`titanium.platform not defined in package.json for package: ${process.env.npm_package_name}`);
		process.exit(1);
	}

	return platforms;
}
