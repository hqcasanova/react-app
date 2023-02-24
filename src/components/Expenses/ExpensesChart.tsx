import Card from 'components/ui/Card';
import ChartBar from 'components/ui/ChartBar';
import Expense from 'models/Expense';

import './ExpensesChart.scss';

type Props = {
  expenses: Expense[],
};

function ExpensesChart({ expenses }: Props) {
  const dataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  expenses.forEach((expense) => {
    const month = expense.date.getMonth();
    dataPoints[month].value += expense.amount;
  });

  const dataValues = dataPoints.map((point) => point.value);
  const globalMax = Math.max(...dataValues);

  return (
    <Card className='expenses-chart'>
      { dataPoints.map(({ label, value }) => (
        <ChartBar
          key={label}
          value={value}
          maxValue={globalMax}
          label={label}
        />
      ))}
    </Card>
  );
}

export default ExpensesChart;
