import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenses = [
    {
      id: "e1",
      title: "New Book",
      amount: 29.99,
      date: new Date(2020, 9, 19),
    },
    { id: "e2", title: "Mouse", amount: 19.99, date: new Date(2020, 9, 19) },
    {
      id: "e3",
      title: "Register",
      amount: 19.45,
      date: new Date(2020, 5, 23),
    },
    {
      id: "e3",
      title: "Laptop",
      amount: 249.99,
      date: new Date(2021, 8, 5),
    },
    {
      id: "e4",
      title: "Bottle",
      amount: 3.5,
      date: new Date(2019, 1, 27),
    },
  ];

  return (
    <ul className="expenses">
      {expenses.map((expense) => (
        <div className="expense-item" key={expense.id}>
          <h3>
            {expense.date.getDate()}-{expense.date.getMonth() + 1}-
            {expense.date.getFullYear()}
          </h3>
          <h3>{expense.title}</h3>
          <h3>$ {expense.amount}</h3>
        </div>
      ))}
    </ul>
  );
};

export default ExpenseItem;
