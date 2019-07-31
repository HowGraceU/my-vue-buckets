const {	SourceMapDevToolPlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
	target: 'node',
	watch: true,
	devtool: false,
	output: {
		libraryTarget: 'commonjs2'
	},
	module: { // 各种 loader
		rules: [
			{
				test: /\.css$/,
				use: ['css-loader']
			}
		]
	},
	externals: nodeExternals({
		// 不要外置化 webpack 需要处理的依赖模块。
		// 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
		// 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
		whitelist: /\.css$/
	}),
	plugins: [
		new SourceMapDevToolPlugin({}),
		new VueSSRServerPlugin()
	]
};
