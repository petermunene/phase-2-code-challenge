import React, { useState } from 'react';
import SearchBar from './SearchBar';

function ExpenseTable({ expenses }) {

    const [newExpenses , setNewExpenses]=useState(expenses)
    function onDelete(idToDelete){
    const filteredItems=newExpenses.filter((newExpense)=>{return newExpense.id!==idToDelete})
    setNewExpenses(filteredItems)}



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
        {newExpenses.length > 0 ? (
          newExpenses.map((newExpense) => (
            <tr key={newExpense.id}>
              <td>{newExpense.description}</td>
              <td>{newExpense.category}</td>
              <td>{newExpense.amount.toFixed(2)}</td>
              <td>
                <button onClick={()=>{onDelete(newExpense.id)}}>Delete</button>
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
      <SearchBar items={newExpenses}/>
    </table>
  );
}

export default ExpenseTable;