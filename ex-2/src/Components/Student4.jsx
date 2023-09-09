import React, { Component } from 'react';

// @ Using CLass defining Event

// class Student4 extends Component{
//     constructor(props){
//         super(props);

//         this.state={
//             name:"arif",
//             rollNo : this.props.roll
//         }

//         this.handleClick = this.handleClick.bind(this); // only for normal funtion 
//     }
//     handleClick(){
       
//         console.log("clicked through Normal Function using this here due to react it refer to current object of student",this);
//         console.log("My Name is :",this.state.name +"and Roll is :",this.state.rollNo);
//     }

//     // handleClick(){
//     //     console.log("clicked",this);
//     // }
   
//     // handleClick=()=>{
//     //     console.log("clicked through Arrow function here this refer to current object of Student",this);
//     //     console.log("My Name is :",this.state.name +"and Roll is :",this.state.rollNo);
//     // }

//     render(){
//         return(
//             <>
//                <h1> This Event is handle by using Class Component</h1>
//               <h1>My Name is {this.state.name} and RollNo is {this.state.rollNo}</h1>
//               <button onClick={this.handleClick}>Click Me</button>
//             </>
//         );
//     }
// }








// @ Using Function defining Event

function Student4(props){
    function handleclick() {
        console.log("clicked",this);
    }

    return(
        <>
           <h1>This Event is  handle by using Function Component</h1>
           <h2>My Roll is {props.roll}</h2>
          <button onClick={handleclick}>Click Me</button>
        </>
    );
}


export default Student4;