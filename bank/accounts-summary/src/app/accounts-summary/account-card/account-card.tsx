import Paper from '@mui/material/Paper';
import { Account } from '../accounts';
import UsdAmount from '../../usd-amount/usd-amount';
import React from 'react';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';

export interface AccountCardProps {
  account: Account;
}

export function AccountCard({ account }: AccountCardProps) {
  return (
    <Paper elevation={0}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Link href={`${account.type}/${account.id}`}>
          <h2>{account.name}</h2>
        </Link>
        <p>
          Balance: <UsdAmount amount={account.balance} />
        </p>
      </Container>
    </Paper>
  );
}

export default AccountCard;
