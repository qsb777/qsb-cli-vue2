const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
//用于生产环境去除多余的css
module.exports = {
  // lintOnSave: true,
  css: {
    loaderOptions: {},
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("_c", resolve("src/components"));
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 存放less变量文件的路径
        path.resolve(__dirname, "./src/assets/styles/less/base.less"),
      ],
    },
  },
  // parallel: require("os").cpus().length > 1,
  // pluginOptions: {},
  //设置代理
  devServer: {
    // port: 8080,
    // host: "0.0.0.0",
    // https: false,
    open: true,
    // openPage: "about",
    // hot: true,
    // disableHostCheck: true,
    // proxy: {
    //   "/api": {
    //     target: "https://cdn.awenliang.cn",
    //     ws: true,
    //     changeOrigin: true,
    //   },
    //   "/foo": {
    //     target: "https://cdn.awenliang.cn",
    //     ws: true,
    //     changeOrigin: true,
    //   },
    // },
  },
};
