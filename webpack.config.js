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
        // Handle .module.less files (CSS Modules)
        test: /\.module\.less$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS in production
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]_[hash:base64:5]", // Class name format
              },
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true, // Required for Ant Design's Less variables
                modifyVars: {
                  "@primary-color": "#1DA57A", // Customize Ant Design primary color
                  // Add more custom variables here if needed
                },
              },
            },
          },
        ],
      },
      {
        // Handle regular .less files (non-modules)
        test: /\.less$/, // Exclude .module.less to avoid conflict
        exclude: /\.module\.less$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS in production
          "css-loader",
          "less-loader", // Process the Less files
        ],
      },
      {
        // Handle .css files (non-modules)
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // Handle image files (png, svg, jpg, etc.)
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
