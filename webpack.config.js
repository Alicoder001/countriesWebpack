const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	mode: "development",
	entry: {
		main: path.resolve(__dirname, "./src/js/main.js"),
		about: path.resolve(__dirname, "./src/js/about.js"),
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name][contenthash].js",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Country | Home",
			filename: "index.html",
			template: "./src/indexTemp.html",
			chunks: ["main"],
		}),
		new HtmlWebpackPlugin({
			title: "Country | About",
			filename: "about.html",
			template: "./src/pages/aboutTemp.html",
			chunks: ["about"],
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "public"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
};
