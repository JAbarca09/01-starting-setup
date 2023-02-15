import React, { useState } from 'react';
import InputForm from './Components/InputForm';
import Users from './Components/Users';
import ErrorModal from './Components/ErrorModal';

import './App.css';

const DUMMY_USERS = [
  {"Username": "Jesse", "Age" : "19", "key": "User1"},
  {"Username": "Abraham", "Age" : "21", "key": "User2"}
]

function App(props) {

  const [usersArr, setUsersArr] = useState(DUMMY_USERS);
  const [showModal, setShowModal] = useState(false); //should be false on start

  const saveUserHandler = (userData) => {
    //add the user to the array
    setUsersArr((userArr) => {
      userData.key = userArr.length + 1;
      console.log(userData)
      return [userData, ...userArr];
    })
  }

  const ErrorModalTriggerHandler = (triggerState) => {
    setShowModal(triggerState);
  }

  const switchOffErrorModal = () => {
    setShowModal((triggerState) => !triggerState);
  }

  return (
    <div className="bgBlack">
      <InputForm onTurnErrorModalOn={ErrorModalTriggerHandler} onSaveUser={saveUserHandler} />
      {/* Your going to recieve props from the InputForm component for new users! */}
      <Users usersArr={usersArr} />
      {
        showModal && <ErrorModal onErrorModalTrigger={switchOffErrorModal} />
      }
    </div>
  );
}

export default App;
