import React, { useState } from 'react';

const Inline =()=>{
//   const btnColor = {
//     color:"black",
//     backgroundColor:"grey",
//     borderRadius:"50px"
//   }
//   return(
//     <>
//       <button style={btnColor}>Button</button>
//     </>
//   );

// const btnColor = {
//     color:"lightyellow",
//     backgroundColor:"lightpink",
    
// }
// const size={
//     width:'100px',
//     height:'100px'
// }

// return(
//     <>
      
//       <button style={{...btnColor,...size,borderRadius:"10px"}}>button</button>
    
//     </>
// );



const changeText = document.getElementById('btn');
const[bcolor,setColor]=useState(false);
const handleClick=()=>{
    setColor(true);
}
const btnColor = {
    color:"lightyellow",
    backgroundColor:"lightpink",
    
}
const size={
    width:'100px',
    height:'100px'
}
if(bcolor===true){
   btnColor.color="black"
   btnColor.backgroundColor="lightgreen"
   changeText.innerHTML='Clicked';
}

return(
    <>
      <button onClick={handleClick} style={{...btnColor,...size}} id='btn'>Click</button>
    </>
);


}
export default Inline;