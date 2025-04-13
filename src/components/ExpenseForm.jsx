import React, { useState } from 'react';
import ExpenseTable from './ExpenseTable';


const existingItems=[{id:0 ,description:"groceries",category:"vegies",amount:"100"}]

function ExpenseForm(){

    function handleSubmit(e){
        e.preventDefault()
        
        const newItem={id,description,category,amount}
        const updated=[...items,newItem]
        setItemsContent(updated)
        setId(id+1)
        setDescription('')
        setCategory('')
        setAmount('')
    }

    const [items , setItemsContent]=useState(existingItems)
    const [description , setDescription]=useState('')
    const [category , setCategory]=useState('')
    const [amount , setAmount ]=useState('')
    const [id , setId]=useState(1)

    return (
        <div>
            <h3>Add Expense</h3>
            <p>Enter your details below </p>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>{setDescription(e.target.value)}} type="text" placeholder='enter Description such as groceries' name="description" id="description"  />
                <input onChange={(e)=>{setCategory(e.target.value)}}type="text" placeholder='enter Category such as Entertainment' name="category" id="category" />
                <input onChange={(e)=>{setAmount(e.target.value)}}type="number" placeholder='enter amount' name="amount" id="amount" />
                <button type="submit">Post</button>
            </form>
            <ExpenseTable expenses={items}/>
        </div>
    )
}
export default ExpenseForm