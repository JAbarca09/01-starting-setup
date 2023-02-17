import React from "react";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {

    const BackDropModalHandler = (e) => {
        if(e.target.className === styles.modal){
            props.onErrorModalTrigger();
        }
    }

    return (
        <div onClick={BackDropModalHandler} className={styles.modal}>
            <div className={styles["modal-content"]}>
                <div className={styles.headerModalBackground}>
                    <div className="ContentsDivPadding">
                        <h2 className={styles.headerModalH2}>Invalid Input</h2>
                        <p className={styles.errorMessage}>{props.onSaveErrorMessage}</p>
                        <div className={styles.ModalButtonWraper}>
                            <button onClick={props.onErrorModalTrigger} className="InputFormButton">Okay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;
