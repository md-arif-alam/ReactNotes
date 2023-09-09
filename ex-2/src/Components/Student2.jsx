import React, { Component } from 'react'

class Student2 extends Component{
    state={
        name:"arif",
        rollNo:this.props.roll,
        // props1:this.props.props1
    }
    render(){
        return(
          <h1>My Name is {this.state.name} and RollNo is :{this.state.rollNo}</h1>
        );
    }
}
export default Student2;