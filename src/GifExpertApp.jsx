import React from 'react'
import { useState } from "react";
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

            <button onClick={onAddCategory}>add</button>

            {/* lista*/ }
            <ol>
                {categories.map( category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
        
    )
}
