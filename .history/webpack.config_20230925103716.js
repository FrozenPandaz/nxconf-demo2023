const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const {withModuleFederation} = require("@nx/react/module-federation");

const config = require('./module-federation.config').config;

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), withModuleFederation(config), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  return config;
});
