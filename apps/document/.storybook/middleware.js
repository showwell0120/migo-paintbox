const proxy = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  router.use(
    '^/api',
    proxy.createProxyMiddleware({
      target: 'https://merchandise.migoinc-staging.com/', // port:8080
      changeOrigin: true,
    })
  );
};
