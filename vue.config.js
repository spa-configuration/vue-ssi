// default configuration from https://github.com/jantimon/html-webpack-plugin#minification
const defaultConfig = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
}

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // ignore Apache-style SSI directives
        args[0].minify = { ...defaultConfig, ignoreCustomComments: [/^\s*#/] }
        return args;
      })
  }
}
