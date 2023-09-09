import React from "react";

const Header = (props)=>{
    // console.log(props);

    const numberArray = props.contactNumber.map((number)=>{
        return(
            <div>
                <div>{number}</div>
            </div>
        );
    });

    return(
        <div className="menu">
            <div className="container">
                <h2>Contact Manager</h2>
            </div>
            <div>{numberArray}</div>
        </div>


    );
}

export default Header;