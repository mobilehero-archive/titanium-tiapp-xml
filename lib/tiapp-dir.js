'use strict';
/*
	Find the root directory of an appcelerator titanium project
	From https://github.com/brentonhouse/tiapp-dir
	(based on https://github.com/sindresorhus/pkg-dir)

	// example.js
	var tiappDir = require('tiapp-dir');

	tiappDir(__dirname).then(function (rootPath) {
		console.log(rootPath);
		//=> '/projects/appcelerator/mobilehero-demo'
	});

*/
const path = require('path');
const findUp = require('find-up');
const fs = require('fs');

module.exports = cwd => findUp('tiapp.xml', { cwd }).then(fp => fp ? path.dirname(fp) : null);

module.exports.sync = cwd => {
	let fp = findUp.sync('tiapp.xml', { cwd });

	// temporary workaround for dealing with npm package that is named 'tiapp.xml'
	// https://github.com/sindresorhus/find-up/issues/33
	if (fp && fs.statSync(fp).isDirectory()) {
		fp = findUp.sync('tiapp.xml', { cwd: path.dirname(path.dirname(fp)) });
	}
	return fp ? path.dirname(fp) : null;
};
