import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);
  
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== '') {
      setEnteredNameIsValid(true);
    };
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouch(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
    };
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouch(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    
    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouch;

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} value={enteredName} />
        {nameInputIsValid && <p className='error-text'>Name must not be empty!</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
