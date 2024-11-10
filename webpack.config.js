const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-[contenthash:8].js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.less$/, // Match .less files
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // Enable CSS Modules if desired
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true, // Required for Ant Design’s Less variables
                modifyVars: {
                  "@primary-color": "#1DA57A", // Example: customizing primary color
                  // Add other custom variables here
                },
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name]-[contenthash:8][ext]",
        },
      },
    ],
  },
  devServer: {
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
    liveReload: false,
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "", noErrorOnMissing: true }],
    }),
  ],
};
