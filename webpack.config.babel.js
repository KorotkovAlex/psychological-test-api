import path from 'path';

const developmentConfig = {
  target: 'node',
  entry: './src/server.js',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'server.js'
  },
  externals: 'node_modules'
};

export default developmentConfig;
