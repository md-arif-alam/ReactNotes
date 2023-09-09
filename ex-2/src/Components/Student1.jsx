import React,{Component}from "react";


function show(naam){
    return naam;
}

let user = {
    name:"alam",
}

const Student=(props)=>{
    return(
        <>
          <h1>Hello I m {props.name}</h1>
          <h1>My RollNo : {props.roll}</h1>
          <p>my name is {show("arif")}</p>
          <p>my surname is {user.name}</p>
        </>
    );
}
export default Student;