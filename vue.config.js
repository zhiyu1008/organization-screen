const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  lintOnSave: true,
  devServer: {
    open: true,
    https: false,
    port: 8888,
    host: 'localhost',
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  // 打包时不会生成 .map 文件，加快打包速度
  productionSourceMap: false
})
