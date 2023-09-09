import React,{Component} from "react";
import Student from "./Updating1";
import  "./App.css";
import Student2 from "./Student2";
import Student3 from "./Student3";
import Student4 from "./Student4";
import Student5 from "./USeState";
import Mount from "./Mounting";


// here i use class component and render the function component Student
class App extends Component{
  render(){
    // return React.createElement("h1","null","This is Element Rendering");
    // return <h1>This is Element Rendering</h1>
    return(
      <div>
        {/* <h1 className="bg">All Ages is above: {this.props.age}</h1>
        <p>{this.props.children}</p>
        <Student name={"arif"} roll={1+2}/>
        <Student2 roll="100"/>
        <Student3 roll="200"/>
        <Student4 roll="300"/>
        <Student5 roll="400"/>
        <Mount roll="600"/> */}
        <Student/>
      </div>
    )
  }
}
export default App;



 