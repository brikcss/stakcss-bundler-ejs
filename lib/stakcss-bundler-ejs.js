/** ------------------------------------------------------------------------------------------------
 *  @filename  stakcss-bundler-ejs.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  Stakcss bundler which compiles ejs.
 ** --------------------------------------------------------------------------------------------- */

const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');
const merge = require('@brikcss/merge');

module.exports = (config = {}, bundler = {}) => {
	// Assign options.
	bundler.options = Object.assign(
		{
			_with: false,
			localsName: 'data'
		},
		bundler.options
	);

	// Merge data.
	if (typeof bundler.data === 'string') {
		bundler.data =
			bundler.data.indexOf('./') === 0 || bundler.data.indexOf('../') === 0
				? require(path.join(process.cwd(), bundler.data))
				: require(bundler.data);
	}
	bundler.data = merge({}, config.data || {}, bundler.data || {});

	// Grab content if it doesn't exist.
	if (config.content) {
		config.content = compileEjsFile(config.content, bundler);
	} else {
		config.source.forEach((filepath) => {
			bundler.options.filename = filepath;
			config.content = fs.readFileSync(filepath, 'utf8');
			config.content = compileEjsFile(config.content, bundler);
		});
	}

	// Compile the content and return the config.
	return config;
};

/**
 *  Compile ejs content.
 *
 *  @param   {String}  content  String content.
 *  @param   {Object}  bundler  Bundler options.
 *  @return  {String}  Compiled content.
 */
function compileEjsFile(content, bundler = {}) {
	return ejs.render(content, bundler.data, bundler.options);
}
