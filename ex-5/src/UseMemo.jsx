import React, { useState,useMemo } from "react";

const UseMemo = ()=>{
 const[number,setNumber]=useState(0);
 const[msg,setMsg]=useState(false);

 const costlyFunction = (num)=>{
     for(let i=0;i<=10000000;i++){}  
     return num; 
 }

 const handleClick=()=>{
    setNumber(number+1)
 }
 
//  const data = costlyFunction(number); //taking time to render due to dependency on state while rendering


 const data = useMemo(()=>{   // this state only change and render when necessary 
    console.log("underMemo");
     return costlyFunction(number)
 },[number])

 return(
    <>
     <h1>My Number : {data}</h1>
     <button onClick={handleClick}>count+</button>
     <button onClick={()=>setMsg(!msg)}>
        {msg?"Clicked":"Click Me"}
     </button>
    
    </>
 );
}

export default UseMemo;

