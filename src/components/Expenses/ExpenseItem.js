import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

  const clickHandler = () => {
    console.log('clicked')
  }

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
