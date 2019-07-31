const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const {	resolve } = require('path');

let globalCssPath = [
	resolve('src/public'),
	resolve('node_modules/element-ui/lib/theme-chalk')
];

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	// 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
	// 以便可以在之后正确注入异步 chunk。
	// 这也为你的 应用程序/vendor 代码提供了更好的缓存。
	module: { // 各种 loader
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
						// 开启 CSS Modules
							modules: {
								localIdentName: _mode === 'development' ? '[path][name]__[local]' : '[hash:base64:16]'
							},
							importLoaders: 1,
							sourceMap: _mode === 'development'
						}
					},
					'postcss-loader',
					{
						loader: 'global-css-module-loader', // './config/loaders/global-css-module-loader.js'
						// 添加入全局的css url
						options: {
							globalCssPath
						}
					}
				]
			}
		]
	},
	optimization: {
		splitChunks: {
			name: 'manifest',
			minChunks: Infinity
		}
	},
	plugins: [
		// 此插件在输出目录中
		// 生成 `vue-ssr-client-manifest.json`。
		new VueSSRClientPlugin(),
		new MiniCssExtractPlugin({
			filename: `common${_mode === 'development' ? '' : '.[chunkhash]'}.css`
		})
	]
};
