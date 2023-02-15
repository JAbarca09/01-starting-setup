import React, { useState } from "react";
import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    let user = {
      "Username": userName.trim(),
      "Age": userAge.trim(),
      "key": "",
    }

    //conduct error handling here
    //*Check for letters in the name using regex
    if (userName.trim().length < 1 || userAge.trim().length < 1) {
      props.onErrorModalMessage("Please enter a valid name and age (non-empty values).");
      props.onTurnErrorModalOn(true);
    } else if (userAge < 1) {
      props.onErrorModalMessage("Please enter a valid user age!");
      props.onTurnErrorModalOn(true);
    } else if(!/^[A-Za-z\s]+$/.test(userName)){
      props.onErrorModalMessage("Please enter a valid username!");
      props.onTurnErrorModalOn(true);
    } 
    else {
      //When there are no form errors run the below code
      props.onSaveUser(user);
      setUserName("");
      setUserAge("");
    }

  };

  return (
    <div className={styles.FormParentDiv}>
      <form onSubmit={addUser}>
        <div className="ContentsDivPadding">
          <h2 className="smallerH2">Username</h2>
          <input
            className={styles.inputField}
            id={styles.firstInputField}
            type="text"
            onChange={userNameHandler}
            value={userName}
          />
          <h2 className="smallerH2">Age (Years)</h2>
          <input className={styles.inputField} type="number" onChange={userAgeHandler} value={userAge} />
          <button className="InputFormButton" type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
