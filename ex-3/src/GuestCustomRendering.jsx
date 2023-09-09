import React from 'react'

// const Guest = ()=>{
//     return(
//         <>
//           <h1>Welcome Guest</h1>
//           <button>LogIn</button>
//           <button>SignUp</button>
//         </>
//     );
// }
// export default Guest;

// const Guest  = ()=>{
//     return(
//         <>
//           <h1>Oops you are not a Prime Member</h1>
//         </>
//     ); 
// }
// export default Guest;

const Guest = (props)=>{
    return(
        <>
         <h1>Welcome Guest</h1>
         <button onClick={props.logValue}>LogIn</button>
         <button>SignUp</button>
        </>
    );
}
export default Guest;