import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
    //Go through the lists of users and render them!
    return (
        <div className={styles.ParentDiv}>
            <div className={styles.BackgroundForUsersComponent}>
                <div className={styles.ParentUserPadding}>
                    <p className={styles.user}>Jesse Abarca (X Years Old)</p>
                    <p className={styles.user}>Jesse Abarca (X Years Old)</p>
                    <p className={styles.user}>Jesse Abarca (X Years Old)</p>
                </div>
            </div>
        </div>
    );
};

export default Users;
