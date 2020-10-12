#!/usr/bin/env node

const args = process.argv.slice(2);

if (!args.length) {
	console.error(`No parameters specified`);
	process.exit(1);
}
if (!process.env.npm_package_name) {
	console.error(`Not run from npm package script`);
	process.exit(1);
}

switch (args[0]) {

	case `install`:
		require(`./install-module`);
		break;

	case `uninstall`:
		require(`./uninstall-module`);
		break;

	default:
		console.error(`command not recognized: ${args[0]}`);
		process.exit(1);

}
