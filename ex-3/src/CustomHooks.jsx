import { useState } from "react";

const useCustomCounterHook = ()=>{
    const[count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1);
    }
    // const arr=[count,handleClick];
    return{
       count,
       handleClick
    };
}

export default useCustomCounterHook;