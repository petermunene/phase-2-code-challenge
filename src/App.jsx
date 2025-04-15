import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  

  const [items , setItems]=useState([])
  const [filteredItems, setFilteredItems] = useState([]);
  function Filtered (value){
      

    if(!value || value == "" || value == "All"){

      
    setFilteredItems([...items])
    
    }
    else{
        
        const updated = items.filter(
          (item) =>
            item.description.toLowerCase().includes(value.toLowerCase()) ||
            item.category.toLowerCase().includes(value.toLowerCase())
            
        )
        setFilteredItems(updated)
        }}
      
  
  const handleAddItem = (newItem) => {
    const updated = [...items, newItem];
    setItems(updated)
    setFilteredItems(updated);         
  
  };
  

  const handleDelete = (idToDelete) => {
    const updated = items.filter((item) => item.id !== idToDelete);
    setItems(updated)
    setFilteredItems(updated);         
    
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <SearchBar setFiltered={Filtered} />
      <ExpenseForm items={items} setItems={handleAddItem} />
      <ExpenseTable expenses={filteredItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
