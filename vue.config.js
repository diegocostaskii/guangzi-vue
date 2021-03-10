
module.exports = {
  
  publicPath: "./", // 公共路径(必须有的)
  outputDir: "dist", // 输出文件目录
  assetsDir: "assets", //静态资源文件名称
  lintOnSave: false,
  productionSourceMap: false, //去除打包后js的map文件
  devServer: {
    open: true,  // npm run serve后自动打开页面
    host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
    port: 80, // 开发服务器运行端口号
    proxy: null,
  },
  css: {
      loaderOptions: {
        less: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#670cff',
              'link-color': '#ffffff',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        },
       
                  postcss: {
                      plugins: [
                          // 设计稿宽度的1/10，一般为75,设计稿为750
                          require('autoprefixer')({}),
                          require('postcss-px2rem')({remUnit: 192}),
                         
                      ]
                  },
                  
               
      
        
      },
    },
  };