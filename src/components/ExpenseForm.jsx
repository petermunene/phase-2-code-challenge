import React, { useState } from 'react';

function ExpenseForm({ items, setItems }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // Calculate the next id based on the length of current items
  const id = items.length;

  function handleSubmit(e) {
    e.preventDefault();

    // Make sure amount is a number
    const newItem = {
      id,
      description,
      category,
      amount: parseFloat(amount),
    };

    // Add the new item to the list
    setItems(newItem);

    // Reset the form fields
    setDescription('');
    setCategory('');
    setAmount('');
  }

  return (
    <div>
      <h3>Add Expense</h3>
      <p>Enter your details below:</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter Description"
          value={description}
          name="description"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Enter Category"
          value={category}
          name="category"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Enter amount"
          value={amount}
          name="amount"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default ExpenseForm;