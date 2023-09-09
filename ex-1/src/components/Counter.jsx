import React from "react";

export default class Counter extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <article>
                 <h1>Class-Component-Counter</h1>
                 <h2>{this.props.count}</h2>
                 <button onClick={this.props.handleIncrement}>+</button>      
                 <button onClick={this.props.handleDecreament}>-</button>      
                 <button onClick={this.props.handleReset}>Reset</button>  
                 </article>    
           </div>
        );
    }
}
