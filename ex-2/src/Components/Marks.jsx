import React, { Component } from 'react'
export default class Marks extends Component{
    constructor(props){
        console.log("Marks - constructor")
        super(props);
        this.state={
           rollNo:this.props.roll   //12
        }

    }

    static getDerivedStateFromProps(props,state){
        console.log("Marks - Derived State From Props call");
        console.log(props,state);
       if(props.roll !== state.rollNo){
         return {rollNo:props.roll}
       }
       return null;
    }



    // here we put condition on rendering the current component "Marks" using shouldComponentUpdate() method

    shouldComponentUpdate(nextprops,nextstate){
        if(this.state.rollNo < 15){  // after 15 it will stop rendering the Marks component
            console.log("should Component Update call");
            console.log(nextprops,nextstate);
            return true;
        }
        console.log(nextprops,nextstate);
        return false;
    }



    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("Marks - snapshot before update it run before update");
        console.log(prevprops,prevstate);
        return 45;
    }

    componentDidUpdate(prevprops,prevstate,snapshot){
        console.log("Marks - component did update it run after update");
        console.log(prevprops,prevstate);
        console.log(snapshot);
    }


   render(){
    console.log("Marks - render");
     return(
        <>
          <h1>Roll is :{this.state.rollNo}</h1>
        </>
     );
   }

}