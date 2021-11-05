import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <div className="expense-form">
      <form>
        <div className="form-items">
          <div className="expense-title">
            <label>Title</label>
            <input type="text"></input>
          </div>
          <div className="expense-amount">
            <label>Amount</label>
            <input type="number"></input>
          </div>
          <div className="expense-date">
            <label>Date</label>
            <input type="date"></input>
          </div>
          <div className="buttons">
            <button type="submit">Add Expense</button>
            <button type="button">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
