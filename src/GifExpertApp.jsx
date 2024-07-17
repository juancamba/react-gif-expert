import React from 'react'
import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One punch'])
    
    
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
            

            
            {categories.map( category => {
                return (
                    <GifGrid 
                        key={category} 
                        category={category}
                        />
                )
            })}
        
        </>
        
    )
}
