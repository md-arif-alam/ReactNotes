import React, { useState } from 'react'
const Controlled =()=>{

    const[input,setInput]=useState("Arif Alam");

    const handleInput =(e)=>{
       setInput(e.target.value.toUpperCase().substr(0,10));
    //    console.log(e.target.value);
     }
    const [area,setArea]=useState("this is text area");
    const handleArea = (e)=>{
         setArea(e.target.value.toUpperCase().substr(0,50))
         console.log(e.target.value.toUpperCase().substr(0,50));
    }


    return(
        <>
           
           <form>
             <h2>This Form Input is controlled by React</h2>
             <input type="text" value={input} onChange={handleInput} />

             <h2>This Form TextArea is controlled by React</h2>
             <textarea  value={area} onChange={handleArea}/>
           </form>
        </>
    );
}

export default Controlled;