const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/docs/index.js',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/docs/index.html')
		}),
		new UglifyJsPlugin({
			test: /\.js($|\?)/i
		})
	],

	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: path.join(__dirname, 'docs'),
		port: 8000,
		stats: 'minimal'
	}
};
