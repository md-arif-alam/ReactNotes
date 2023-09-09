import React, { useEffect, useRef } from "react";

const UseRef =()=>{
    const textRef = useRef();
    
    useEffect(()=>{
      textRef.current.focus();
    })
    
    return(
        <>
         <form>
           Name : <input type="text" ref={textRef}/>
         </form>
        
        </>
    );
}
export default UseRef;