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
      "Username": userName,
      "Age": userAge,
      "key": "",
    }

    //conduct error handling here

    //When there are no form errors run the below code
    if(userAge < 0){
      props.onTurnErrorModalOn(true);
    } else {
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
