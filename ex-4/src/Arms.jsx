import React, { Component } from "react";

const Army = (Men)=>{
 class newMen extends Component{
    state={
      gunfire : 0,
      gunName : "Machine-Gun"  
   }

   handleGun = ()=>{
     this.setState({gunfire:this.state.gunfire+1})
   }
   render(){
    return(
        
        <>
        
        <Men hocBulletsFire={this.state.gunfire} hocGunName={this.state.gunName} hocHandleGun={this.handleGun} {...this.props}/>
       
        </> 
    
    );
   }
 }

return newMen;

}

export default Army;