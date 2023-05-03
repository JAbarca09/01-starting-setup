import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);
  const [enteredEmailAddress, setEnteredEmailAddress] = useState('');
  const [enteredEmailAddressTouch, setEnteredEmailAddressTouch] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;
  const enteredEmailIsValid = isValidEmail(enteredEmailAddress);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailAddressTouch;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } 

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouch(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmailAddress(event.target.value);
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailAddressTouch(true);
  }

  function isValidEmail(email) {
    // regular expression pattern to check for valid email
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // use test method of regex to check if email matches pattern
    return pattern.test(email);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouch(true);

    if (!enteredNameIsValid) {
      return;
    }
  
    console.log(enteredName);
    console.log(enteredEmailAddress);
    setEnteredName('');
    setEnteredNameTouch(false);
    setEnteredEmailAddress('');
    setEnteredEmailAddressTouch(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} value={enteredName} />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onBlur={emailInputBlurHandler} onChange={emailInputChangeHandler} value={enteredEmailAddress} />
        {emailInputIsInvalid && <p className='error-text'>Enter a valid email!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
