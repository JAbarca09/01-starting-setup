import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");
  const expenses = props.expenses;

  const selectYearHandler = (passedData) => {
    setFilterYear(passedData);
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterYear={selectYearHandler} />
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
    </Card>
  );
}

export default Expenses;
