import Button from 'components/ui/Button';

import './ExpenseDate.scss';

type Props = {
  date: Date,
  onClick: (date: Date) => void
};

function ExpenseDate({ date, onClick }: Props) {
  const month = date.toLocaleString('en-GB', { month: 'long' });
  const day = date.toLocaleString('en-GB', { day: '2-digit' });
  const year = date.getFullYear();

  const clickHandler = () => {
    onClick(date);
  };

  return (
    <Button
      className='expense-date secondary'
      onClick={clickHandler}
    >
      <time dateTime={`${year}-${month}-${day}`}>
        <span className='expense-date__item expense-date__day'>{ day }</span>
        <span className='expense-date__item expense-date__month'>{ month }</span>
        <span className='expense-date__item expense-date__year'>{ year }</span>
      </time>
    </Button>
  );
}

export default ExpenseDate;
