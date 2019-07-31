const {	SourceMapDevToolPlugin } = require('webpack');
const baseConfig = require('./webpack.client.base.js');
const merge = require('webpack-merge');
const config = {
	watch: true,
	devtool: false,
	plugins: [
		new SourceMapDevToolPlugin({})
	]
};
module.exports = merge(config, baseConfig);
