const path = require("path");
const webpack = require("webpack");

// in django change dist to './frontend/src'
const dist = "dist"

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, dist),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader?'
                    },
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
};