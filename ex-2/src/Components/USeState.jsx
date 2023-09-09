import React, { Component } from 'react'

// class Student5 extends Component{

//     // here we can use both with constructor or without constructor
//     // constructor(props){
//     //     super(props);
//     //     this.state={
//     //         name:"arif",
//     //         rollNo:this.props.roll
//     //     }
//     // }


//     state={
//         name:"arif",
//         rollNo:this.props.roll
//     }
//     // handleClick = this.handleClick.bind(this); // use only in normal function

//     // handleClick(){
//     //     this.setState({name:"alam", rollNo:"500"});  //normal function
//     // }
// //    ########################################
//     // here setState takes object as argument
//     // handleClick=()=>{
//     //     this.setState({name:"alam", rollNo:"500"});
//     // }
// //    ########################################
//     // here setState() takes function as argument
//     handleClick=()=>{
//         this.setState(function(state,props){
//             console.log(state);
//             console.log(props);
//             console.log(state.name);
//             console.log(state.rollNo);
//             console.log(props.roll);
//             // this.setState({name:"alam"})
//             // this.setState({rollNo:"500"})
//         });
//     }
//     render(){
//         return(
//             <>
//               <h1>My Name is {this.state.name} and Roll is {this.state.rollNo}</h1>
//               <button onClick={this.handleClick}>Click To Change</button>
//             </>
//         );
//     }

// } 
// export default Student5;

// ###########################################################################
// @ Passing Argument To Event Handler

export default class Student5 extends Component{
    state ={
        id: 1,
        name:"Arif"
    };
    handleClick=(id,name,j,e)=>{
        console.log(id);
        console.log(name);
        console.log(j);
        console.log(e);
    }

    // handleArg=(e)=>{
    //    this.handleClick(this.state.id,this.state.name,e);
    // }


    render(){
        return(
            <>  
               <h1>Here we passing args to the Event handler</h1>
               {/* <button onClick={this.handleArg}>Delete</button>           */}
               {/* <button onClick={(e)=>
                                this.handleClick(this.state.id,this.state.name,"111",e)}>Delete</button>           */}

                <button onClick={this.handleClick.bind(this,this.state.id,this.state.name,"111")}>Delete</button>                 
            </>
        );
    }
}


