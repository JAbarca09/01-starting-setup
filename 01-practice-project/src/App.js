import React, { useState } from 'react';
import InputForm from './Components/InputForm';
import Users from './Components/Users';
import './App.css';

const DUMMY_USERS = [
  {"Username": "Jesse", "Age" : "19", "key": "User1"},
  {"Username": "Abraham", "Age" : "21", "key": "User2"}
]

function App(props) {

  const [usersArr, setUsersArr] = useState(DUMMY_USERS);

  const saveUserHandler = (userData) => {
    //add the user to the array
    setUsersArr((userArr) => {
      userData.key = userArr.length + 1;
      console.log(userData)
      return [userData, ...userArr];
    })
  }

  return (
    <div className="bgBlack">
      <InputForm onSaveUser={saveUserHandler} />
      {/* Your going to recieve props from the InputForm component for new users! */}
      <Users usersArr={usersArr} />
    </div>
  );
}

export default App;
