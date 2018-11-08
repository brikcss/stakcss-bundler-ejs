# Stakcss EJS Bundler

[![Greenkeeper badge](https://badges.greenkeeper.io/brikcss/stakcss-bundler-ejs.svg)](https://greenkeeper.io/)

> Bundler for [Stakcss](https://github.com/brikcss/stakcss) that compiles [EJS](https://github.com/mde/ejs).

<!-- Shields. -->
<p>
	<!-- NPM version. -->
	<a href="https://www.npmjs.com/package/@brikcss/stakcss-bundler-ejs">
		<img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/stakcss-bundler-ejs.svg?style=flat-square">
	</a>
	<!-- NPM downloads/month. -->
	<a href="https://www.npmjs.com/package/@brikcss/stakcss-bundler-ejs">
		<img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/stakcss-bundler-ejs.svg?style=flat-square">
	</a>
	<!-- Travis branch. -->
	<a href="https://github.com/brikcss/stakcss-bundler-ejs/tree/master">
		<img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master">
	</a>
	<!-- Codacy. -->
	<a href="https://www.codacy.com/app/thezimmee/stakcss-bundler-ejs">
		<img alt="NPM version" src="https://img.shields.io/codacy/grade/e0533cc20ede445c905e9934efc5f04f/master.svg?style=flat-square">
	</a>
	<!-- Coveralls -->
	<a href='https://coveralls.io/github/brikcss/stakcss-bundler-ejs?branch=master'>
		<img src='https://img.shields.io/coveralls/github/brikcss/stakcss-bundler-ejs/master.svg?style=flat-square' alt='Coverage Status' />
	</a>
	<!-- Commitizen friendly. -->
	<a href="http://commitizen.github.io/cz-cli/">
		<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
	</a>
	<!-- Semantic release. -->
	<a href="https://github.com/semantic-release/semantic-release">
		<img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a>
	<!-- Prettier code style. -->
	<a href="https://prettier.io/">
		<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	</a>
	<!-- MIT License. -->
	<!-- <a href="https://choosealicense.com/licenses/mit/">
		<img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square">
	</a> -->
</p>

## Install

```sh
npm install @brikcss/stakcss @brikcss/stakcss-bundler-ejs --save-dev
```

## Usage

Add the bundler to Stakcss and configure like any other bundler:

- Node:
	```js
	stak({
		bundlers: ['@brikcss/stakcss-bundler-ejs']
	});
	// or with options and data:
	stak({
		bundlers: [{
			run: '@brikcss/stakcss-bundler-ejs',
			options: {},
			data: {}
		}]
	});
	```
- CLI:
	```sh
	stak ... --bundlers=@brikcss/stakcss-bundler-ejs
	```

### Bundler Configuration

_Note: From a CLI, you must use a config file (`--config=<path>`)_ to configure the bundler.

- **`bundler.options`** _{Object}_ Options passed to [EJS](https://github.com/mde/ejs#options). The default options are: `{ _with: false, localsName: 'data' }`.
- **`bundler.data`** _{Object | String}_ Data to compile EJS content with. Can be actual data or a _String_, which is treated as a path to a data file which can be "required" into node.

_See [Stakcss](https://github.com/brikcss/stakcss) for more on using Stakcss bundlers._
