// import React,{Component}from 'react';
// import Inline from './InlineStyle';
// import External from './ExternalStyle';
// import Controlled from './ControlledComponent';
// import ControlledMulti from './ControlledMultiple';
// import Uncontrolled from './UncontrolledUsingRefs';
// import CallBackRef from './CallbackRef';
// import UseRef from './UseRef';
// import ContextSimpleUser from './ContextSimpleUser';

// const App =()=>{
//   return(
//     <>
//       {/* <Inline/>
//       <External/>
//       <Controlled/>
//       <ControlledMulti/>   */}
//       {/* <Uncontrolled/> */}
//       {/* <CallBackRef/>  */}
//       <UseRef/>
//     </>
//   );
// }
// export default App;





// #############################################################################

// For simple example of Context Api

// export const myContext = React.createContext();
// export default class App extends Component{
//   state={
//     user:"arif"
//   }

// render(){

//  return(
//   <>
//     <myContext.Provider value={this.state.user}>
//       <ContextSimpleUser/>
//     </myContext.Provider>
//   </>
//  );
// }
// }


//  complex example of Context Api

// export const myContext = React.createContext();
// export default class App extends Component{
//   state={
//     user:"Arif",
//     count:10
//   }
//   handleClick=()=>{
//    this.setState({count:this.state.count+1});
//   }

//   render(){
//     const context = {
//       data:this.state,
//       handleCount:this.handleClick,
//     }
//     return(
//       <>
//        <myContext.Provider value={context}>
//          <ContextSimpleUser/>
//        </myContext.Provider>
//       </>
//     );
//   }
// }




// Using function Component

// import React, { createContext, useEffect, useState } from 'react';
// import ContextSimpleUser from './ContextSimpleUser';
// export const userContext = createContext(null);

// export default function App(){
//   const[user,setUser]=useState();
//   useEffect(()=>{
//     setUser("arif");
//   },[]);
  
//   return(
//     <>
//      <userContext.Provider value={user}>
//        <h1>{`hello ${user}`}</h1>
//        <ContextSimpleUser/>
//      </userContext.Provider>  
//     </>
//   );
// }



// import React,{createContext,useEffect,useState} from 'react';
// import ContextSimpleUser from './ContextSimpleUser';
// export const usercontext = createContext(null);

// export default function App(){
//   const[userdata,setUserData]=useState({});
//   useEffect(()=>{
//     setUserData(
//      {
//       name:"arif",
//       count: 0,
//       }
    
//     )
//   },[])
//   const handleClick = ()=>{
//         setUserData({count:userdata.count+1});
//   }
//   const handleName =()=>{
//     setUserData({name:'alam'})
//   }
  
//   const contex = {
//     data:userdata,
//     handleCount:handleClick,
//     handleuserName:handleName,
//   }
//   return(
//     <>
//       <usercontext.Provider value={contex}>
//         {/* <h1>{`hello ${userdata.name}`}</h1> */}
//         <ContextSimpleUser/>
//       </usercontext.Provider>
//     </>
//   );
// }




// ##############################################################

//HigherOrder Component

import React from 'react';
import JohnWick from './ArmyPerson1';

function App(){
  return(
    <>
      <JohnWick chapter={4}/>
    </>
  );
}

export default App;