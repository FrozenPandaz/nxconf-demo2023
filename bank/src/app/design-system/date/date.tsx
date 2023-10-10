/* eslint-disable-next-line */
export interface DateProps {
  date: Date;
}

const DateFormat = new Intl.DateTimeFormat('en-US');

export function DateComponent({ date }: DateProps) {
  return <span>{DateFormat.format(date)}</span>;
}

export default DateComponent;
