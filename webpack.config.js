const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src/docs'),
	output: {
		path: path.join(__dirname, 'docs'),
		filename: 'index.js',
		//publicPath allows you to specify the base path for all the assets within your application.
      publicPath: "./"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|svg|jpg|gif|mp4)$/,
				use: ['file-loader']
			}
		]
	},
	devServer: {
		contentBase: '/',
		// historyAPIFallback will redirect 404s to /index.html.
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
