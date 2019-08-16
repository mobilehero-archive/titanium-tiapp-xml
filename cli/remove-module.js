#!/usr/bin/env node
const path = require('path');
const args = process.argv.slice(2);
if (args.length) {

	const tiappDir = require('../tiapp-dir');

	tiappDir(__dirname).then(rootPath => {

		if (!rootPath) {
			console.error(`Could not find tiapp.xml in directory tree: ${__dirname}`);
			process.exit(1);
		}
		console.log(`Removing module ${args[0]} from ${path.join(rootPath, 'tiapp.xml')}`);
		const tiapp = require('../tiapp-xml').load(path.join(rootPath, 'tiapp.xml'));

		switch (args.length) {

			case 1:
				tiapp.removeModule(args[0]);
				tiapp.removeModule(args[0], 'android');
				tiapp.removeModule(args[0], 'ios');
				break;

			case 2:
				tiapp.removeModule(args[0], args[1]);
				break;

			default:
				tiapp.removeModule(args[0], args[1], args[2]);
				break;

		}

		tiapp.write();
	});

}
