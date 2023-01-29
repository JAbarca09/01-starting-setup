import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <div className="expenses">
      {expenses.map((element, idx) => {
        return (
          <ExpenseItem
            key={"ExpenseItem" + idx}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
