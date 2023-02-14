import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {

    const usersArr = props.usersArr;

    //Go through the lists of users and render them!
    return (
        <div className={styles.ParentDiv}>
            <div className={styles.BackgroundForUsersComponent}>
                <div className={styles.ParentUserPadding}>
                    {
                        usersArr.map(user => {
                            return(
                                <p key={user.key} className={styles.user}>{user.Username} ({user.Age} Years Old)</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;
