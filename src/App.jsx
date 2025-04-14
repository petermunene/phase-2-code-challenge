import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  

  const [items , setItems]=useState([])
  const [filteredItems, setFilteredItems] = useState(items);
  function filtered (value){
        
    if(value ==""){

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
  function dispayItems(){
    const AllItems=[...items,]
    setFilteredItems(AllItems)
  }

  const handleDelete = (idToDelete) => {
    const updated = items.filter((item) => item.id !== idToDelete);
    setItems(updated)
    setFilteredItems(updated);         
    
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <SearchBar setFiltered={filtered} />
      <ExpenseForm items={items} setItems={handleAddItem} />
      <ExpenseTable expenses={filteredItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
