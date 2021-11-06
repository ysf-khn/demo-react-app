import { useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";

const DEMO_EXPENSES = [
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
    id: "e4",
    title: "Laptop",
    amount: 249.99,
    date: new Date(2021, 8, 5),
  },
  {
    id: "e5",
    title: "Bottle",
    amount: 3.5,
    date: new Date(2019, 1, 27),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DEMO_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };

  return (
    <div className="App">
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseItem items={expenses} />
    </div>
  );
}

export default App;
