import React, { useEffect, useState } from 'react';

import List from 'components/ui/List';
import Expense from 'models/Expense';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './index.scss';

type Props = {
  startYear?: number,
  endYear?: number,
  expenses: Expense[],
};

function ExpensesList({
  startYear = 2000,
  endYear = 2023,
  expenses,
}: Props) {
  const [filterYear, setFilterYear] = useState('');

  const filteredExpenses = expenses.filter((expense) => {
    const sYear = expense.date.getFullYear().toString();
    return sYear === filterYear || filterYear.length === 0;
  });

  useEffect(() => {
    setFilterYear('');
  }, [expenses]);

  const changeFilterHandler = (selectedYear: string) => {
    setFilterYear(selectedYear);
  };

  const clickDateHandler = (date: Date) => {
    setFilterYear(date.getFullYear().toString());
  };

  const totalCount = () => {
    if (filteredExpenses.length === 0) {
      return null;
    }

    return (
      <>
        <strong>{ expenses.length }</strong>
        { ' expenses' }
      </>
    );
  };

  const filteredCount = () => {
    if (filteredExpenses.length >= expenses.length) {
      return null;
    }

    return (
      <>
        <strong>{ filteredExpenses.length }</strong>
        { ' out of ' }
      </>
    );
  };

  return (
    <div className='expenses'>
      <div className='expenses__heading'>
        <ExpensesFilter
          startYear={startYear}
          endYear={endYear}
          selectedYear={filterYear}
          onChangeFilter={changeFilterHandler}
        />

        <span className='expenses__counter'>
          { filteredCount() }
          { totalCount() }
        </span>
      </div>

      <List
        className='expenses__list'
        items={filteredExpenses}
        emptyItem={<strong>No expenses found</strong>}
      >
        {(expense: Expense, itemTag: string) => (
          <ExpenseItem
            rootTag={itemTag}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
            onClickDate={clickDateHandler}
          />
        )}
      </List>
    </div>
  );
}

export default ExpensesList;