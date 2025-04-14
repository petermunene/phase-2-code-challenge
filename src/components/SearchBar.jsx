import React, { useState } from 'react';

function SearchBar({setFiltered }) {
  const [value, setValue] = useState('All');
  
  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search by description or category.."
        onChange={(e) => {
          const val = e.target.value;
          setValue(val);
            setFiltered(val);
        }}
      
      />
    </div>
  );
}

export default SearchBar;