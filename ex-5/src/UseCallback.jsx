import React,{useState,useCallback} from "react";
import Todos from "./Todos";

const UseCallback=()=>{
    const[count,setCount]=useState(0);
    const[todo,setTodo]=useState([]);

    const handleClick=()=>{
        setCount(count+1);
    }

    const todoArray = useCallback(()=>{
        return setTodo((prev)=>[...prev,`new Entry`]);
    },[todo]);

    return(
        <>
        
          <Todos todoArr = {todo} todoFun={todoArray}/>
           <h1>{count}</h1>
          <button onClick={handleClick}>Count+</button> 

        </>
    );
}
export default UseCallback;