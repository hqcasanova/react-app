import Expense from 'models/Expense';
import ExpenseInput from 'models/ExpenseInput';
import Card from 'components/ui/Card';
import ExpenseForm from './ExpenseForm';

import './index.scss';

type Props = {
  minDate?: string,
  maxDate?: string,
  minPrice?: string,
  stepPrice?: string,
  onAddExpense: (data: Expense) => void
};

function NewExpense({
  minDate = '2000-01-01',
  maxDate = '2023-12-31',
  minPrice = '0.01',
  stepPrice = '0.01',
  onAddExpense,
}: Props) {
  const saveExpenseHandler = (input: ExpenseInput) => {
    const expense = {
      title: input.title,
      amount: parseInt(input.amount, 10),
      date: new Date(input.date),
    };
    onAddExpense(new Expense(expense));
  };

  return (
    <Card className='new-expense'>
      <ExpenseForm
        minDate={minDate}
        maxDate={maxDate}
        minPrice={minPrice}
        stepPrice={stepPrice}
        onSaveExpense={saveExpenseHandler}
      />
    </Card>
  );
}

export default NewExpense;
