module.exports = {
  proxy: {
    "/energy-ws": {
      target: "http://192.168.7.19:8080",
      // target: "http://dns.hedpy.cn:5129",
      secure: false,
      changeOrigin: true,
    },
    "/energy-admin": {
      target: "http://192.168.7.19:8080",
      // target: "http://192.168.7.19:8081",
      // target: "http://dns.hedpy.cn:5129",
      secure: false,
      changeOrigin: true,
    },
    "/api": {
      target: "http://192.168.7.19:8080",
      secure: false,
      changeOrigin: true,
    },
    "/energy-api": {
      // target: "http://192.168.7.19:8081",
      // target: "http://192.168.7.19:8080",
      target: "http://dns.hedpy.cn:5129",
      secure: false,
      changeOrigin: true,
    },
    "/energy-carbon": {
      //  target: "http://192.168.7.19:8080",
      target: "http://dns.hedpy.cn:5129",
      secure: false,
      changeOrigin: true,
    },
    "/egystatics": {
      target: "http://192.168.7.19:8080",
      // target: "http://192.168.7.19:8081",
      secure: false,
      changeOrigin: true,
    },
    "/workJs": {
      // target: "http://192.168.7.19:8081",
      target: "http://192.168.7.19:8080",
      secure: false,
      changeOrigin: true,
    },
    "/workComponents": {
      // target: "http://192.168.7.19:8081",
      target: "http://192.168.7.19:8080",
      // target: "http://dns.hedpy.cn:5129",
      secure: false,
      changeOrigin: true,
    },
  },
};
