import { useState } from "react"


export const AddCategory = ({setCategories}) => {
    
    const [inputValue , setInputValue] = useState("one punch")
    
    const onInputChange = (event) =>{
        setInputValue(event.target.value)
        //console.log(event.target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        console.log("a ver")
        if(inputValue.trim().length <= 1) return;

        console.log(inputValue)
        console.log(setCategories)
        setCategories(categories=>[...categories,inputValue])
        //setInputValue('')

    }
    return (
        <form onSubmit={(event)=> onSubmit(event)}>
            <input
                type="text"
                placeholder="buscar gifs"
                value ={inputValue}
                onChange={(ev)=> onInputChange(ev)}
            />
        </form>
    
  )
}
