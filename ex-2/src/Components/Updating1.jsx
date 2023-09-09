import React from 'react'
import { Component } from 'react'
import Marks from './Marks';

export default class Student extends Component{
    constructor(props){
        console.log("Student - constructor")
        super(props);
        this.state={
           roll : 12,
        }
    }

    handleClick=()=>{
        console.log("button clicked");
        // this.setState({roll:20});
        this.setState({roll:this.state.roll+1})
    }

    render(){
        console.log("Student - render");
        return(
            <>
               <Marks roll={this.state.roll}></Marks>
               <button onClick={this.handleClick}>Change</button>
            </>
        );
        }
}