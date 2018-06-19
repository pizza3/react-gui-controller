const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

// const externals = () => ({
// 	react: 'react',
// 	'prop-types': 'prop-types'
// });

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	// externals: externals(),
	plugins: [
		htmlPlugin,
		new UglifyJsPlugin({
			test: /\.js($|\?)/i
		})
	]
};
