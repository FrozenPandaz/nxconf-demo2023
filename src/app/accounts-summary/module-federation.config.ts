import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'accounts-summary',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;