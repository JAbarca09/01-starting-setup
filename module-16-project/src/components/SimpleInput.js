import { useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const [enteredEmailAddress, setEnteredEmailAddress] = useState('');
  const [enteredEmailAddressTouch, setEnteredEmailAddressTouch] = useState(false);

  const enteredEmailIsValid = isValidEmail(enteredEmailAddress);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailAddressTouch;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmailAddress(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailAddressTouch(true);
  };

  function isValidEmail(email) {
    // regular expression pattern to check for valid email
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // use test method of regex to check if email matches pattern
    return pattern.test(email.trim());
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmailAddress);

    resetNameInput();

    setEnteredEmailAddress('');
    setEnteredEmailAddressTouch(false);
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onBlur={nameInputBlurHandler}
          onChange={nameChangedHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
          value={enteredEmailAddress}
        />
        {emailInputIsInvalid && (
          <p className='error-text'>Enter a valid email!</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
