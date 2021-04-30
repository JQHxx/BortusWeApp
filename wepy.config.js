const TypeScriptCompiler = require('@wepy/compiler-typescript');
const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.vue',
  eslint: true,
  cliLogs: !prod,
  static: ['src/resources','src/demo.theme.json'],
  build: {
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator'
      ]
    }
  },
  plugins: [
    TypeScriptCompiler()
  ],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

