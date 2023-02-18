import {
  MouseEvent,
  useRef,
  useState,
} from 'react';
import ExpenseInput from 'models/ExpenseInput';
import Button from 'components/ui/Button';

import './ExpenseForm.scss';
import Field, { FieldHandle } from 'components/ui/Field';

type Props = {
  minDate: string,
  maxDate: string,
  minPrice: string,
  stepPrice: string,
  onSaveExpense: (expense: ExpenseInput) => void
};

function ExpenseForm({
  minDate,
  maxDate,
  minPrice,
  stepPrice,
  onSaveExpense,
}: Props) {
  const initInput = new ExpenseInput();
  const [userInput, setUserInput] = useState(initInput);
  const validityRef = useRef({});
  const titleRef = useRef<FieldHandle>(null);
  const dateRef = useRef<FieldHandle>(null);
  const amountRef = useRef<FieldHandle>(null);
  const inputRefs = [titleRef, dateRef, amountRef];

  const resetForm = () => {
    setUserInput(initInput);
    validityRef.current = {};
    inputRefs.forEach(({ current }) => current?.reset());
  };

  const submitHandler = (event: MouseEvent) => {
    event.preventDefault();
    const isFormValid = Object.values(validityRef.current).every(Boolean);

    if (isFormValid) {
      onSaveExpense(userInput);
      resetForm();
    } else {
      inputRefs.forEach(({ current }) => current?.setTouched());
    }
  };

  const changeHandler = (value: string, inputName: string) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputName]: value,
    }));
  };

  const validationHandler = (isValid: boolean, inputName: string) => {
    validityRef.current = {
      ...validityRef.current,
      [inputName]: isValid,
    };
  };

  return (
    <form>
      <fieldset className='new-expense__controls'>
        <Field
          ref={titleRef}
          className='new-expense__field new-expense__field--wide'
          label='Title'
          name='title'
          type='text'
          autoCapitalize='none'
          spellCheck='false'
          required
          value={userInput.title}
          onFieldChange={changeHandler}
          onValidation={validationHandler}
        />

        <Field
          ref={dateRef}
          className='new-expense__field'
          label='Date'
          name='date'
          type='date'
          min={minDate}
          max={maxDate}
          required
          value={userInput.date}
          onFieldChange={changeHandler}
          onValidation={validationHandler}
        />

        <Field
          ref={amountRef}
          className='new-expense__field'
          label='Amount'
          name='amount'
          type='number'
          min={minPrice}
          step={stepPrice}
          required
          value={userInput.amount}
          onFieldChange={changeHandler}
          onValidation={validationHandler}
        />
      </fieldset>

      <div className='new-expense__actions'>
        <Button onClick={submitHandler}>
          Add expense
        </Button>
      </div>
    </form>
  );
}

export default ExpenseForm;