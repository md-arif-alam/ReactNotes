// import React, { Component } from 'react'
// import { myContext } from './App'



// Simple example of Context API

// export default class ContextSimpleGuide extends Component{
//     render(){
//         return(
//             <>
//               <h1>This is Context Guide</h1>
//               <myContext.Consumer>
//                 {(data)=> <h2>{data}</h2>}
//               </myContext.Consumer>
//             </>
//         );
//     }
// }











// ################################################################

// complex example of Context API



// export default class ContextSimpleGuide extends Component {
//   render() {
//     return (
//       <>
//           <h1>This is Context Guide</h1>
//           <myContext.Consumer>
//               {({data,handleCount})=>
//                 <div>
//                     <h4>name:{data.name} and Count : {data.count}</h4>
//                     <button onClick={handleCount}>Count+</button>
//                 </div>
//               }
//           </myContext.Consumer>
//       </>
//     )
//   }
// }




// using Function Component

// import React,{useContext} from 'react';
// import {userContext} from './App';


// export default function ContextSimpleGuest(){
//   const userValue = useContext(userContext);
//   return(
//     <>
//       <h1>your name is : {userValue}</h1>   
//     </>
//   );

// }


import React,{useContext} from 'react';
import {usercontext} from './App';

export default function ContextSimpleGuest(){
  const{data,handleCount,handleuserName} = useContext(usercontext);
  return(
    <>
     <h1>your name is {data.name} and count is : {data.count}</h1>
     <button onClick={handleCount}>count+</button>
     <button onClick={handleuserName}>Name</button>
    
    </>
  );
}

