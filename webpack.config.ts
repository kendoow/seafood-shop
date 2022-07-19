import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin'

const mode = process.env.MODE === "development" ? "development" : "production"

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  mode: mode,
  plugins: [new HtmlWebpackPlugin({filename: 'public/index.html'})],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
