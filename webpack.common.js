const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackPluginConfig = {
  meta: {
    viewport:
      'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    'theme-color': '#4285f4',
  },
  templateParameters: {
    brandName: 'mealapp',
  },
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Category',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/category.html'),
      ...htmlWebpackPluginConfig,
    }),

    // Details Pages
    new HtmlWebpackPlugin({
      title: 'Category Detail',
      filename: 'detail/category.html',
      template: path.resolve(__dirname, 'src/views/detail/category.html'),
      ...htmlWebpackPluginConfig,
    }),
    new HtmlWebpackPlugin({
      title: 'Meal Detail',
      filename: 'detail/meal.html',
      template: path.resolve(__dirname, 'src/views/detail/meal.html'),
      ...htmlWebpackPluginConfig,
    }),
    new CleanWebpackPlugin(),
  ],
};
