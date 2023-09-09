import React, { Component } from "react";
import Army from './Arms';

class JohnWick extends Component{
    render(){
        return(
        <> 
             <h1>John-Wick Chapter: {this.props.chapter}</h1>
            <h2 onMouseOver={this.props.hocHandleGun}>John's gun is : {this.props.hocGunName} and he shots bullets : {this.props.hocBulletsFire}</h2>

        </>
        );
    }
}

export default Army(JohnWick);

