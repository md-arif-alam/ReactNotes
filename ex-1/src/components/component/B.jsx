// import React from "react";
// import { Storage } from "../apis/LaptopStore";

// const B =()=>{
//     return(
//         <div>
//             <Storage.Consumer>
//                 {
//                     (data)=>{
//                         return <h1>{data.name}</h1>
//                     }

//                 }
//             </Storage.Consumer>
//         </div> 
//          );
// }

// export default B;

import React from 'react';
import { Storage } from '../apis/LaptopStore';
import { useContext } from 'react';

const B = ()=>{
    // return(
    //     <Storage.Consumer>
    //         {
    //             (data)=>{
    //                return  <h1>{data.name}</h1>
    //             }
    //         }
    //     </Storage.Consumer>
    // );

    const{name,age} = useContext(Storage);
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    );
}

export default B;