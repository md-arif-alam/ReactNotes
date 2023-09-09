import React, { Component } from 'react'

class Student3 extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"arif",
            rollNo : this.props.roll,
        }
    }
    render(){
        return(
            <>
              <h1>My Name is {this.state.name} and RollNo is {this.state.rollNo}</h1>
            </>
        );
    }
}

export default Student3; 