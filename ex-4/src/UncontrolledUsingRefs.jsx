import React, { Component } from "react";

export default class Uncontrolled extends Component{
  constructor(props){
    super(props);
    this.textInput=React.createRef();
    this.pass = React.createRef();
    this.state={
        pwd : " ",
    }
  }

  componentDidMount = ()=>{
    this.textInput.current.focus();
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({pwd:this.pass.current.value});
  }
  render(){
    return(
        <>
          <form onSubmit={this.handleSubmit}>
            the password is : <p>{this.state.pwd}</p>
            Name: <input type="text" ref={this.textInput} />
            <br /><br />
            Password: <input type="text"ref={this.pass} /><br /><br />
            <input type="submit" value="submit" />
          </form>
        </>
    );
  }
}