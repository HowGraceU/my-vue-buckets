// webpack 打包数据分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const baseConfig = require('./webpack.client.base.js');
const merge = require('webpack-merge');
const config = {
	plugins: [
		new BundleAnalyzerPlugin()
	]
};
module.exports = merge(config, baseConfig);
