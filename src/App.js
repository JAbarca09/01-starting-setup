import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
/*
Assignment: Add a filter component
listen to changes on the dropdown, whenever the user selects a new year and state
listen to the event and then the picked year should be forwareded to the expenses component.

The picked year should be forwarded to the expenses component, Expense filter should live there as well.
Store the year in a state


Listen for changes
forward the changes to the Expense component
save the year data to a state on Expenses Component


data is being moved from child ExpensesFilter => to the parent Expenses
*/

function App(props) {
  //this code stays!
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHanlder = (expenseData) => {
    console.log(expenseData);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHanlder} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
