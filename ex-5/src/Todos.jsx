import { memo } from "react";
import React from "react";

const Todos =({todoArr,todoFun})=>{
   return(
    <>
     <h2>My Todos</h2>
     {todoArr.map((currValue,index)=>{

        return <p>{currValue+index}</p>  
                  
        }
     )}
    <button onClick={todoFun}>Add</button>
    </>
   );
}

export default memo(Todos);