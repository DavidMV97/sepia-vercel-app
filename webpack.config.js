const globImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (env, argv) => {
	const isDevMode = argv.mode === "development";
	return {
		//mode: isDevMode ? "development" : "production",
		mode: "production",
		//: isDevMode ? "source-map" : false,
		devtool: 'source-map',
		entry: {
			main: ["./src/js/main.js", "./src/sass/style.scss"]
		},
		module: {
			rules: [{
				test: /\.scss$/,
				use: [{
					loader: MiniCssExtractPlugin.loader
				},
				{
					loader: "css-loader",
					options: {
						sourceMap: true,
						modules: false,
						localIdentName: "[local]___[hash:base64:5]"
					}
				},
				{
					loader: "postcss-loader",
					options: {
						sourceMap: true
					}
				},
				{
					loader: "sass-loader",
					options: {
						importer: globImporter(),
						sourceMap: true,
					}
				},
				]
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'static/',
						useRelativePath: true,
						esModule: false
					}
				}]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/',
						useRelativePath: true,
						esModule: false
					}
				}]
			},
			// {
			//     test: /\.js$/,
			//     exclude: /(node_modules|bower_components)/,
			//     use: {
			//         loader: "babel-loader",
			//         options: {
			//             presets: [
			//                 ["@babel/preset-env", { modules: false }]
			//             ]
			//         }
			//     }
			// }
			{
				test: /\.js$/,
				enforce: "pre",
				use: ["source-map-loader"],
			},
			]
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].js",
			publicPath: "./"
		},

		optimization: {
			minimize: false
		},

		plugins: [
			new MiniCssExtractPlugin()
		]
	};
};