const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const {withModuleFederation} = require("@nx/react/module-federation");

import config from './module-federation.config';


// Nx plugins for webpack.
export default composePlugins(withNx(), withReact(), withModuleFederation(config));
