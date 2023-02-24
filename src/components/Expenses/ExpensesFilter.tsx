import { ChangeEvent } from 'react';

import classes from './ExpensesFilter.module.scss';

type Props = {
  startYear: number,
  endYear: number,
  selectedYear: string,
  onChangeFilter: (currValue: string) => void,
};

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
function range(start: number, stop: number, step = 1) {
  const length = (stop - start) / step + 1;
  const mapFn = (_: any, i: number) => (start + i * step).toString();

  return Array.from({ length }, mapFn);
}

function ExpensesFilter({
  startYear,
  endYear,
  selectedYear,
  onChangeFilter,
}: Props) {
  const years = range(startYear, endYear).reverse();

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value);
  };

  return (
    <label className={classes['expenses-filter']}>
      Filter by year
      <select
        value={selectedYear}
        onChange={changeHandler}
      >
        <option value=''>All</option>

        { years.map((year) => (
          <option
            value={year}
            key={year}
          >
            { year }
          </option>
        )) }
      </select>
    </label>
  );
}

export default ExpensesFilter;
