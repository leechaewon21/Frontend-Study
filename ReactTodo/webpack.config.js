const path = require("path")

module.exports = {
    entry: path.resolve(__dirname,"app/index.js"),
    output: {
        path: path.resolve(__dirname,"app"),
        filename: "bundle.js"
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        host:"localhost",
        port:3000,
        static: {
          directory: path.resolve(__dirname,"app")
        },
        hot: true,
        historyApiFallback: { index: "index.html" }
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-react",
                  "@babel/preset-env"
                ]
              }
            }
          }
        ]
    }
}