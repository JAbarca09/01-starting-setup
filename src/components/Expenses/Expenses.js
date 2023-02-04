import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [isFilterTrue, setIsFilteredTrue] = useState(false);
  const [filterArr, setFilterArr] = useState([]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setIsFilteredTrue(true);
    const FilteredArr = props.items.filter((expense) => expense.date.getFullYear() === parseInt(selectedYear));
    setFilterArr(FilteredArr);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {isFilterTrue == false
          ? props.items.map((element) => (
            <ExpenseItem
              key={element.id}
              title={element.title}
              amount={element.amount}
              date={element.date}
            />
          ))
          :
          filterArr.map((element) => (
            <ExpenseItem
              key={element.id}
              title={element.title}
              amount={element.amount}
              date={element.date}
            />
          ))
        }
      </Card>
    </div>
  );
};

export default Expenses;
