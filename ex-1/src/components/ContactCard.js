import React from "react";
import alarm from "./images/alarm.png";

const ContactCard = (props)=>{

    const {id,name,email} = props.contact;

    return(
        
             <div>
                 <img src={alarm} height={"50px"} width={"50px"} alt="img"></img>
                             <div style={{backgroundColor:"lightgray", color:"white"}}>
                             <div>{id}</div>
                             <div>{name}</div>
                             <div>{email}</div>
                             </div>
             </div>
      
    );
}

export default ContactCard;