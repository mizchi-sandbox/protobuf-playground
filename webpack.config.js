module.exports = {
  mode: 'development',
  entry: './web-client.ts',
  output: {
    path: __dirname + '/web',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
}
