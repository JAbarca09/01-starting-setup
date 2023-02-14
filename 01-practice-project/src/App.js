import InputForm from './Components/InputForm';
import Users from './Components/Users';
import './App.css';

const DUMMY_USERS = [
  {"Username": "Jesse", "Age" : "19", "key": "User1"},
  {"Username": "Abraham", "Age" : "21", "key": "User2"}
]

function App() {
  return (
    <div className="bgBlack">
      <InputForm />
      {/* Your going to recieve props from the InputForm component for new users! */}
      <Users usersArr={DUMMY_USERS} />
    </div>
  );
}

export default App;
