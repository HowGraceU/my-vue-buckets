// 解析webpack打包参数，获取当前的打包模式 若为 webpack --mode development，则 argv 为 {mode: 'development'}
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const env = argv.env;

// 根据当前的打包模式引入配置，若是开发模式则开启 watch，SourceMap
let _mergeConfig;
if (env === 'server') {
	_mergeConfig = require(`./config/webpack.${env}.js`);
} else {
	_mergeConfig = require(`./config/webpack.${_mode}.js`);
}

const merge = require('webpack-merge');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const {
	join,
	resolve
} = require('path');

let webpackConfig = {
	entry: {
		[env]: join(__dirname, `./src/entry-${env}.js`)
	}, // 多个入口对应多个出口
	output: {
		path: join(__dirname, './dist/'),
		publicPath: '/dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
	},
	resolveLoader: {
		modules: [
			'node_modules',
			resolve('config/loaders')
		]
	},
	module: { // 各种 loader
		rules: [{
			test: /\.vue$/,
			use: [{
				loader: 'vue-loader',
				options: {
					optimizeSSR: false,
					extractCSS: true
				}
			}]
		}, {
			test: /\.js$/,
			use: [{
				loader: 'babel-loader'
			}]
		},
		{
			test: /\.(js|vue)$/,
			enforce: 'pre', // 预先加载好 eslint loader
			exclude: /node_modules/, // 排除掉 node_modules 文件夹下的所有文件
			use: [{
				loader: 'eslint-loader',
				options: {
					formatter: require('eslint-friendly-formatter'),
					emitWarning: true
				}
			}]
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:7].[ext]'
				}
			}]
		}]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: { // 别名
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	}
};

module.exports = merge(webpackConfig, _mergeConfig);
