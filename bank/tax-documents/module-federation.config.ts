import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'tax-documents',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
