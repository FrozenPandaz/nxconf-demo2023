/* eslint-disable-next-line */
export interface UsdAmountProps {
  amount: number;
}

const USDollarFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function UsdAmount({ amount }: UsdAmountProps) {
  return <span>{USDollarFormat.format(amount)}</span>;
}

export default UsdAmount;
