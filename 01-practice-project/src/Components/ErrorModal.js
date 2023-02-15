import React from "react";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <div className={styles.headerModalBackground}>
          <div className="ContentsDivPadding">
            <h2 className={styles.headerModalH2}>Invalid Input</h2>
            <p className={styles.errorMessage}>
              Please enter a valid name and age (non-empty values).
            </p>
            <div className={styles.ModalButtonWraper}>
              <button className="InputFormButton">Okay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
