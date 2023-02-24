import Card from 'components/ui/Card';
import ExpenseDate from './ExpenseDate';

import classes from './ExpenseItem.module.scss';

type Props = {
  rootTag: string,
  title: string,
  amount: number,
  date: Date,
  onClickDate: (date: Date) => void,
};

function ExpenseItem({
  rootTag,
  title,
  amount,
  date,
  onClickDate,
}: Props) {
  const clickHandler = () => {
    onClickDate(date);
  };

  return (
    <Card
      tagName={rootTag}
      className={classes['expense-item']}
    >
      <ExpenseDate
        date={date}
        onClick={clickHandler}
      />
      <div className={classes['expense-item__description']}>
        <span className={classes['expense-item__title']}>
          { title }
        </span>
        <div className={classes['expense-item__price']}>
          { `${amount} €` }
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
