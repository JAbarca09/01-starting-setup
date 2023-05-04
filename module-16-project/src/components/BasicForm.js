import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  //TODOFirst Name Input
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== '');

  //TODO Last Name Input
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== '');

  //TODO Email Address Input
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => isValidEmail(value));

  //TODO Check if the submit button should be valid or not?
  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  function isValidEmail(email) {
    // regular expression pattern to check for valid email
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // use test method of regex to check if email matches pattern
    return pattern.test(email.trim());
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    // If the form is valid then reset all the values
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClasses = enteredFirstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameInputClasses = enteredLastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = enteredEmailHasError
    ? 'form-control invalid'
    : 'form-control';

  //TODO Connect all the variables to their corresponding location
  return (
    <form onSubmit={onFormSubmit}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={enteredFirstName}
          />
          {enteredFirstNameHasError && (
            <p className='error-text'>Your first name is not valid</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {enteredLastNameHasError && (
            <p className='error-text'>Your last name is not valid</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailHasError && (
          <p className='error-text'>Your email is not valid</p>
        )}
      </div>
      <div className='form-actions'>
        {/* FIXME set disabled and enabled state for button */}
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
