import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <ul className="expenses">
      {props.items.map((expense) => (
        <li className="expense-item" key={expense.id}>
          <div>{expense.date}</div>
          <div>{expense.title}</div>
          <div>$ {expense.amount}</div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseItem;
