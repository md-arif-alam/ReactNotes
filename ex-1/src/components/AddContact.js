import React from "react";

class AddContact extends React.Component{
    
    constructor(props){
        super();
        // const nameValue = props.cont[0].name;
        // const emailValue = props.cont[1].email;  
        // console.log(nameValue);
        // console.log(emailValue);            
    }
    render(){
        
        return(
           <div className="main">
            <h2>Add Contact</h2>
            <form className="form">
                <div className="field">
                    <label>Name : </label>
                    <input type="text" value={this.props.cont.name} name="userName" placeholder="name"/>
                </div>
            
                <div className="field">
                    <label>Email : </label>
                    <input type="text" value={this.props.cont.email} name="userEmail" placeholder="email"/>
                </div>
                <button className="button">Submit</button>
            </form>
           </div>


        );
     }
} 

export default AddContact;