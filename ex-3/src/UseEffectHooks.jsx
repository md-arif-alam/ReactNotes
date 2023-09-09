import React, { useState,useEffect } from 'react'

const UseEffectHook =()=>{

    const[countPlus,setCountPlus]=useState(0);
    const[countMinus,setCountMinus]=useState(50);
    const handleClick=()=>{
        setCountPlus(countPlus+1);
    }
    const handleClick1=()=>{
        setCountMinus(countMinus+1);
    }
    
    useEffect(()=>{
      console.log("useEffect Render");
    },[countPlus]);


    return(
        <>
         <h1>{countPlus}</h1>
         <button onClick={handleClick}>increment</button>
         <h1>{countMinus}</h1>
         <button onClick={handleClick1}>decrement</button>
        </>
    )
}
export default UseEffectHook;