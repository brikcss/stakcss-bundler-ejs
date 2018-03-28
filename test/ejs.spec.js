/* eslint-env mocha */
const assert = require('assert');
const rm = require('rimraf');
const fs = require('fs-extra');
const stak = require('@brikcss/stakcss');

describe('ejs()', () => {
	afterEach(() => {
		rm.sync('.temp');
	});

	it('compiles a simple ejs template from source', () => {
		return stak({
			source: 'test/fixtures/template/simple.md.ejs',
			output: '.temp/simple.md',
			bundlers: [
				{
					run: './lib/stakcss-bundler-ejs.js',
					data: {
						title: 'Hello world!!!',
						intro: 'Welcome to my world...'
					}
				}
			]
		}).then(() => {
			assert.equal(
				fs.readFileSync('.temp/simple.md', 'utf8'),
				'# Hello world!!!\n\n> Welcome to my world...\n'
			);
		});
	});

	it('compiles a simple ejs template from source', () => {
		return stak({
			source: 'test/fixtures/template/index.html.ejs',
			output: '.temp/index.html',
			bundlers: [
				{
					run: './lib/stakcss-bundler-ejs.js',
					data: {
						page: {
							description: 'This is <em>my page</em> Yay!!!.'
						},
						stylesheets: [
							'vendor-styles.css',
							'my-library-styles.css',
							'my-styles.css'
						],
						scripts: [
							'vendor-scripts.js',
							'my-library-scripts.js',
							'my-view-scripts.js'
						]
					}
				}
			]
		}).then(() => {
			assert.equal(
				fs.readFileSync('.temp/index.html', 'utf8'),
				fs.readFileSync('test/expected/template/index.html', 'utf8')
			);
		});
	});

	it('compiles ejs from content', () => {
		return stak({
			content:
				"# <%= data.title %>\n\nWhat's goin on???\n\n<%= data.keywords.join(' | '); %>",
			output: '.temp/custom.md',
			bundlers: [
				{
					run: './lib/stakcss-bundler-ejs.js',
					data: {
						title: 'My Custom MarkDown file',
						keywords: ['cool', 'awesome', 'amazing', 'mind blowing']
					}
				}
			]
		}).then(() => {
			assert.equal(
				fs.readFileSync('.temp/custom.md', 'utf8'),
				"# My Custom MarkDown file\n\nWhat's goin on???\n\ncool | awesome | amazing | mind blowing"
			);
		});
	});

	it('compiles ejs with a data file', () => {
		return stak({
			content:
				"# <%= data.title %>\n\nWhat's goin on???\n\n<%= data.keywords.join(' | '); %>",
			output: '.temp/custom.md',
			bundlers: [
				{
					run: './lib/stakcss-bundler-ejs.js',
					data: './test/fixtures/data/data.js'
				}
			]
		}).then(() => {
			assert.equal(
				fs.readFileSync('.temp/custom.md', 'utf8'),
				"# My Custom MarkDown file with a data file\n\nWhat's goin on???\n\ncool | awesome | amazing | mind blowing | nailed it"
			);
		});
	});
});
