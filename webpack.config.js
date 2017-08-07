module.exports = {
	entry: ["./utils","./app"],
	output: {
		filename: "bundle.js"
	},

	module: {
        
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
            {
                test:/\.es6$/,
                exclude: /node_modules/,
			    loader: "jshint-loader"
            }
		]
	},

	resolve: {
		extensions: [ '.js', '.es6']
	}
}