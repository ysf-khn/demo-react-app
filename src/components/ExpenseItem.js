import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expenses">
      {props.items.map((expense) => (
        <div className="expense-item" key={expense.id}>
          <div>{expense.title}</div>
          <div>$ {expense.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;
