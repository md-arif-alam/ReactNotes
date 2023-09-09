import React from "react";
import { Storage } from "../apis/LaptopStore";
import { useContext } from "react";

const A =()=>{
    // return(
    //     <div>
    //         <Storage.Consumer>
    //             {
    //                 (data)=>{
    //                     return <h1>A</h1>
    //                 }
    //             }
    //         </Storage.Consumer>
    //     </div>
    // )
    const{name,age} = useContext(Storage);
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
        
    );
}
export default A;