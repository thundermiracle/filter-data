module.exports = {
  mode: 'development',
  entry: './src/index.ts',
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
  devtool: 'cheap-module-eval-source-map',
};
