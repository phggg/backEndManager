const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy,
  addLessLoader
} = require('customize-cra');


const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  addWebpackAlias({
    assets: path.resolve(__dirname, './src/assets'),
    pages: path.resolve(__dirname, './src/pages'),
    utils: path.resolve(__dirname, './src/utils'),
    resource: path.resolve(__dirname, './src/resource'),
    config: path.resolve(__dirname, './src/config'),
    '@': path.resolve(__dirname, './src/components'),
  }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1890ff'
    }
  }),

  addDecoratorsLegacy()
);