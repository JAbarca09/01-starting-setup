import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {

    const usersArr = props.usersArr;
    //Go through the lists of users and render them!
    //the component needs to be reevaluated using a useState
    return (
        <div className={styles.ParentDiv}>
            {usersArr.length > 0 ? (
                <div className={styles.BackgroundForUsersComponent}>
                    <div className={styles.ParentUserPadding}>
                        {usersArr.map(user => {
                            return (
                                <p key={user.key} className={styles.user}>{user.Username} ({user.Age} Years Old)</p>
                            )
                        })}
                    </div>
                </div>)
                :
                <h2 className={styles.noUsersH2}>There are no users...</h2>
            }
        </div>
    );
};

export default Users;

{/* usersArr.map(user => {
            
            return (
            <div className={styles.ParentUserPadding}>
                <p key={user.key} className={styles.user}>{user.Username} ({user.Age} Years Old)</p>
            </div>
            )
        })) */}