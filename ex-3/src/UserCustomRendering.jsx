import React from 'react'

// const User = ()=>{
//     return(
//         <>
//           <h1>Welcome Arif</h1>
//           <button>LogOut</button>
//         </>
//     );
// }

// export default User;



// const User = ()=>{
//     return(
//         <>
//           <h1>You Are Prime Member !!!!</h1>
//         </>
//     );
// }
// export default User;



const User =(props)=>{
    return(
        <>
          <h1>Welcome Arif</h1>
          <button onClick={props.logValue}>LogOut</button>
        </>
    );
}
export default User;
