const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");
const path = require("path");
const packagesServeConfigPath = path.join(process.cwd(),"../../", "packages-serve.config.js");
let packagesServeConfig = {}
if(fs.existsSync(packagesServeConfigPath)){
  packagesServeConfig = require(packagesServeConfigPath)
}

module.exports = defineConfig({
  configureWebpack: {
    plugins: [],
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      axios: "axios",
      "ant-design-vue": "antd",
      "vxe-table": "VXETable",
      "xe-utils": "XEUtils"
    }
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      "/energy-ws": {
        target: "http://192.168.7.19:8080",
        secure: false,
        changeOrigin: true
      },
      "/energy-admin": {
        target: "http://192.168.7.19:8080",
        secure: false,
        changeOrigin: true
      },
      "/api": {
        target: "http://192.168.7.19:8080",
        secure: false,
        changeOrigin: true
      },
      "/energy-api": {
        target: "http://192.168.7.19:8080",
        secure: false,
        changeOrigin: true
      },
      "/energy-carbon": {
         target: "http://192.168.7.19:8080",
        secure: false,
        changeOrigin: true
      },
      "/egystatics": {
        target: "http://192.168.7.19:8080",
        secure: false,
        changeOrigin: true
      },
      "/workJs": {
        target: "http://192.168.7.19:8080",
        secure: false,
        changeOrigin: true
      },
      "/workComponents": {
        target: "http://192.168.7.19:8080",
        secure: false,
        changeOrigin: true
      },
      ...packagesServeConfig.proxy
    }
  }
});
