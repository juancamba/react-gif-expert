import React from 'react'
import { useState } from "react";
import { AddCategory } from './components/AddCategory';
export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One punch','Dragon'])
    
    
    const apiKey = 'gqUyAwQ0NqQNyzMizfALutMxKdNBuuqf'
    
    const onAddCategory = (newCategory)=>{
        
        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory])

        
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>
            {/*input, pasamos por referencia la funcion*/ }
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory={event=>onAddCategory(event)}
            />
            

            {/* lista*/ }
            <ol>
                {categories.map( category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
        
    )
}
