import Button from 'components/ui/Button';

import classes from './ExpenseDate.module.scss';

type Props = {
  date: Date,
  onClick: (date: Date) => void
};

function ExpenseDate({ date, onClick }: Props) {
  const month = date.toLocaleString('en-GB', { month: 'long' });
  const monthNum = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.toLocaleString('en-GB', { day: '2-digit' });
  const year = date.getFullYear();

  const clickHandler = () => onClick(date);

  return (
    <Button
      className={`${classes['expense-date']} secondary`}
      onClick={clickHandler}
    >
      <time
        className={classes['expense-date__wrapper']}
        dateTime={`${year}-${monthNum}-${day}`}
      >
        <span className={`${classes['expense-date__item']} ${classes['expense-date__day']}`}>
          { day }
        </span>
        <span className={`${classes['expense-date__item']} ${classes['expense-date__month']}`}>
          { month }
        </span>
        <span className={`${classes['expense-date__item']} ${classes['expense-date__year']}`}>
          { year }
        </span>
      </time>
    </Button>
  );
}

export default ExpenseDate;
