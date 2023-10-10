import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'bank',
  remotes: ['accounts-summary', 'credit-card', 'tax-documents'],
};

export default config;
