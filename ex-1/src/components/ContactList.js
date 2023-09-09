import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props)=>{
    
    const contactArrayList = props.contacts.map((contactValue)=>{
        return(
        <ContactCard contact={contactValue}/>
        );
    });

    return(
        <div>
            {contactArrayList}
        </div>
    );
}
export default ContactList;