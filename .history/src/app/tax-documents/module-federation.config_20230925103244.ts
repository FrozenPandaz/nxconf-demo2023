import { ModuleFederationConfig } from '@nx/webpack';

const config2: ModuleFederationConfig = {
  name: 'tax-documents',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config2;
