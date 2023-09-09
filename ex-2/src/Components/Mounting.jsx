import React, { Component } from 'react'

export default class Mount extends Component{
    constructor(props){
        super(props);
        console.log("constructor call");
        this.state={
            name:"arif"
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log('get derived state');
        console.log(state,props);
        return null;
    }

    componentDidMount(){
        console.log("Component Did Mount call");
    }
    render(){
        console.log("App render call");
        return(
            <>
             <h1>Name is {this.state.name}</h1>
            </>
        );
    }
}