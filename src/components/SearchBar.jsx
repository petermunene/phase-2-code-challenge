import React, { useState } from 'react';

function SearchBar({ items, setFilteredItems }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  function onSearch() {
    const filtered = items.filter(
      (item) =>
        item.description.toLowerCase().includes(description.toLowerCase()) ||
        item.category.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredItems(filtered);
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search by description..."
        onChange={(e) => {
          setDescription(e.target.value);
          onSearch();
        }}
      />
      <input
        type="text"
        placeholder="Search by category..."
        onChange={(e) => {
          setCategory(e.target.value);
          onSearch();
        }}
      />
    </div>
  );
}

export default SearchBar;