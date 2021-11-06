import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const enteredTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const enteredAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const enteredDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredExpenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: enteredDate,
    };

    props.onAddExpense(enteredExpenseData);
  };

  return (
    <div className="expense-form">
      <form>
        <div className="form-items">
          <div className="expense-title">
            <label>Title</label>
            <input
              type="text"
              onChange={enteredTitleHandler}
              value={enteredTitle}
            ></input>
          </div>
          <div className="expense-amount">
            <label>Amount</label>
            <input
              type="number"
              onChange={enteredAmountHandler}
              value={enteredAmount}
            ></input>
          </div>
          <div className="expense-date">
            <label>Date</label>
            <input
              type="date"
              onChange={enteredDateHandler}
              value={enteredDate}
            ></input>
          </div>
          <div className="buttons">
            <button type="submit" onClick={submitHandler}>
              Add Expense
            </button>
            <button type="button">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
