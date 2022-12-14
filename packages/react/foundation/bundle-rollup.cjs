const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup');

console.log('svgr:', svgr);

module.exports = (options) => ({
  ...options,
  plugins: [...options.plugins, url(), svgr()],
});
