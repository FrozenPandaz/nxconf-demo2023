import UsdAmount from '../usd-amount/usd-amount';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { DateComponent } from '../../design-system/date/date';
import Container from '@mui/material/Container';

/* eslint-disable-next-line */
export interface TransactionProps {
  transaction: TransactionData;
}
export interface TransactionData {
  id: number;
  date: Date;
  amount: number;
}

export function Transaction({ transaction }: TransactionProps) {
  return (
    <Paper>
      <Container sx={{ mt: 1, mb: 1 }} className="transaction">
        <Grid container spacing={2}>
          <Grid xs={1} minWidth={100}>
            <DateComponent date={new Date(transaction.date)} />
          </Grid>
          <Grid xs={8}>
            <UsdAmount amount={transaction.amount} />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Transaction;
