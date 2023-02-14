import React, { useState } from "react";
import styles from "./InputForm.module.css";

const InputForm = () => {
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
  };

  return (
    <div className={styles.FormParentDiv}>
      <form onSubmit={addUser}>
        <div className={styles.FormContentsDiv}>
          <h2 className={styles.smallerH2}>Username</h2>
          <input
            className={styles.inputField}
            id={styles.firstInputField}
            type="text"
            onChange={userNameHandler}
          />
          <h2 className={styles.smallerH2}>Age (Years)</h2>
          <input className={styles.inputField} type="number" onChange={userAgeHandler} />
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
