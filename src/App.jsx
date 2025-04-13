import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      
     
      <ExpenseForm />
      <ExpenseTable />
      <SearchBar />
    </div>
  );
}

export default App;
