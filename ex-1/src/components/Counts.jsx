import React from "react";

class Counts extends React.Component{
    
    constructor(){
        super();
        this.state={
           count:0
        }
        
    }
    change=()=>{
        this.state.count +=1;
        console.log(this.state.count);
        this.setState({count:this.state.count+1});
    }
   
    render(){
        return(
         <>
          <h1>{this.state.count}</h1>
           <button onClick={this.change()}>Change</button>
         </>
         )
    }

}
export default Counts;