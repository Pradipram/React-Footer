const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
        globalObject: "this",
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    externals: {
        react: "commonjs react",
        "react-dom": "commonjs react-dom",
        "@mui/material": "commonjs @mui/material",
        "@emotion/react": "commonjs @emotion/react",
        "@emotion/styled": "commonjs @emotion/styled",
    },
    plugins: [new CleanWebpackPlugin()],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
