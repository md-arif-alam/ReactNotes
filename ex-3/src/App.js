import React,{useState} from 'react'
import UseStateHook from './UseStateHooks'
import UseEffectHook from './UseEffectHooks';
import useCustomCounterHook from './CustomHooks';
import User from './UserCustomRendering';
import Guest from './GuestCustomRendering';
import List from './List'
import List2 from './List2'

// for useState and useEffect Hooks
// const App=()=>{

//     const data = useCustomCounterHook();

//     return(
//         <>
//           {/* <UseStateHook/> */}
//           {/* <UseEffectHook/> */}
//           {/* <h1>{data.count}</h1>
//           <button type='button' onClick={data.handleClick}>Increment</button> */}

//         </>
//     );
// }
// export default App;


//for conditional rendering

     // I.  -----------If condition--------

// const App = (props)=>{
//   const authenticUser = props.register;
//   if(authenticUser){
//     return <User/>
//   }
//   return <Guest/>
// }

// export default App;

    // II. && operator 

 
// const App = (props)=>{
//   const authentic = props.isPrimeMember;
//   return(
//     <>
//        <h1>Welcome User</h1>
//        {authentic && <User/>}
//     </>
//   );
// } 
// export default App; 



   // III. Using If-Else condition 



// const App =()=>{
   
//   const[log,setLog]=useState(false);
  
//   const handleLogin = ()=>{
//       setLog(true);
//   }
//   const handleLogout = ()=>{
//     setLog(false);
//   }

//   const logState = log;
  // if(logState){
  //   return <User logValue={handleLogout}/>
  // }
  // else{
  //   return <Guest logValue={handleLogin}/>
  // }



// return(
//   <>
//      {logState ? <User logValue={handleLogout} /> : <Guest logValue={handleLogin}/>}
//   </>
// );



//  IIFE conditional
// return(
//   <>

//      {/* {(()=>{})()} */}
//     {(()=>{
     
//           if(logState){
//             return <User logValue={handleLogout}/>
//           }
//           else{
//             return <Guest logValue={handleLogin}/>
//           }
        

//     })()}
//   </>
// );

// What is List 

const App = ()=>{
//   const arr = [5,57,68,7,98];
// return(
//   <>
//     <List newArr={arr}/>
//   </>
// );

return(
  <>
    <List2/>
  </>
);


}
export default App;  