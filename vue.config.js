module.exports = {
  publicPath:'./',  // 输出文件目录
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',

      }
    }
  },
  lintOnSave: false,
  devServer: {
      host: '192.168.0.107', // ip
      port: 8081, // 设置端口号
      https: false, // https:{type:Boolean}
      open: false, //配置自动启动浏览器
      proxy:null  //设置代理
  }
}