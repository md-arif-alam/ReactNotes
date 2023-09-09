import React, { Component } from 'react'

export default class CallBackRef extends Component{

    constructor(props){
        super(props);
        this.backRef=null;
        this.setBackRef = (element)=>{
            this.backRef = element;
        }
    }

    componentDidMount=()=>{
        if(this.backRef){
            this.backRef.focus();
        }
    }


  render(){
    return(
        <>
          <form>
            Name :<input type="text" ref={this.setBackRef}/><br /><br />
            Password :<input type='text'/>
          </form>
        </>
    );
  }
}