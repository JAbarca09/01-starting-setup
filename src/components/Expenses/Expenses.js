import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const expenses = props.expenses;

  const selectYearHandler = (passedData) => {
    setFilterYear(passedData);
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filterYear} onFilterYear={selectYearHandler} />
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
    </Card>
  );
}

export default Expenses;
