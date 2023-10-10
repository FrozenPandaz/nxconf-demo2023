import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Transaction } from '../transaction/transaction';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface CreditCardAccountDetailsProps {}

export function CreditCardAccountDetails(props: CreditCardAccountDetailsProps) {
  const [transactions, updateData] = useState([]);
  useEffect(() => {
    (async () => {
      const url = '/api/transactions';
      const request = await fetch(url);
      if (request.ok) {
        const { transactions } = await request.json();
        updateData(transactions);
      }
    })();
  }, [updateData]);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <h1>Credit Card</h1>
      <h2>Transactions</h2>
      <Stack spacing={2}>
        {transactions.map((tsx) => (
          <Transaction transaction={tsx}></Transaction>
        ))}
      </Stack>
    </Container>
  );
}

export default CreditCardAccountDetails;
