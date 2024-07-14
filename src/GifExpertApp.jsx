import React from 'react'
import { useState } from "react";
import { AddCategory } from './components/AddCategory';
export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One punch','Dragon'])
    
    
    const apiKey = 'gqUyAwQ0NqQNyzMizfALutMxKdNBuuqf'
    
    const onAddCategory = ()=>{
        console.log("evento")
        setCategories([...categories,"Otra"])

        
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>
            {/*input, pasamos por referencia la funcion*/ }
            <AddCategory setCategories={setCategories}/>
            

            {/* lista*/ }
            <ol>
                {categories.map( category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
        
    )
}
