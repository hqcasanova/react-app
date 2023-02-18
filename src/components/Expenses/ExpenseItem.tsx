import Card from 'components/ui/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.scss';

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
      className='expense-item'
    >
      <ExpenseDate
        date={date}
        onClick={clickHandler}
      />
      <div className='expense-item__description'>
        <span className='expense-item__title'>
          { title }
        </span>
        <div className='expense-item__price'>
          { `${amount} €` }
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
