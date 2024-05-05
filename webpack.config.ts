import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default function () {
  return {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      })
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      historyApiFallback: true,
      compress: true,
      port: 9000,
    },
  };
}
