const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.join(__dirname, 'src/docs')
	},
	output: {
		path: path.join(__dirname, 'docs'),
		filename: 'index.js',
		//publicPath allows you to specify the base path for all the assets within your application.
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	devServer: {
		// historyAPIFallback will redirect 404s to /index.html.
		publicPath: '/assets/', // here's the change
		contentBase: path.join(__dirname, 'docs'),
		historyApiFallback: true
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/docs/index.html')
		}),
		new UglifyJsPlugin({
			test: /\.js($|\?)/i
		})
	]
};
