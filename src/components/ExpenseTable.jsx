import React from 'react';

function ExpenseTable({ expenses, onDelete }) {
  return (
    <table border="1" width="100%" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount (ksh)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount.toFixed(2)}</td>
              <td>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" align="center">
              No expenses found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
