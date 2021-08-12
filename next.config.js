const path = require('path');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  plugins: [new BundleAnalyzerPlugin()],
};
