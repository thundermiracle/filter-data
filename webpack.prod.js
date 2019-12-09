// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'main.min.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.webpack.json',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', 'tsx'],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  plugins: [new webpack.optimize.AggressiveMergingPlugin()],
};
