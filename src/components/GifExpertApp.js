import React,{useState} from 'react';
import {AddCategory} from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = ()=>{


    // const categories = ['uno','dos','tres']
    const [categories, setCategories] = useState(['uno']);

    // const handleAdd = ()=>{
    //     const newCategory= 'cuatro';

    //     setCategories([...categories,newCategory]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {categories.map((category)=>{
                   return <GifGrid key={category} category={category}/>
                  
                })}
            </ol>
        </>
    )
}

export default GifExpertApp;