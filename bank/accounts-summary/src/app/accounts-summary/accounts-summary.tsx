import Stack from '@mui/material/Stack';
import React from 'react';
import { AccountCard } from './account-card/account-card';
import { accounts } from './accounts';
import Container from '@mui/material/Container';

/* eslint-disable-next-line */
export interface AccountsSummaryProps {}
export function AccountsSummary(props: AccountsSummaryProps) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Stack spacing={2}>
        <AccountCard account={accounts[0]}></AccountCard>
        <AccountCard account={accounts[1]}></AccountCard>
        <AccountCard account={accounts[2]}></AccountCard>
      </Stack>
    </Container>
  );
}

export default AccountsSummary;
