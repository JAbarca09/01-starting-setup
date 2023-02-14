import React from "react";
import styles from "./InputForm.module.css";

const InputForm = () => {
  return (
    <div className={styles.FormParentDiv}>
      <form>
        <div className={styles.FormContentsDiv}>
          <h2 className={styles.smallerH2}>Username</h2>
          <input className={styles.inputField} type="text" />
          <h2 className={styles.smallerH2}>Age (Years)</h2>
          <input className={styles.inputField} type="number" />
        </div>
      </form>
    </div>
  );
};

export default InputForm;
