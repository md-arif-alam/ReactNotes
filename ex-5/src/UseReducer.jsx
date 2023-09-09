import React, { useReducer } from "react";

const initialState = 0;
const UseReducer = ()=>{
    const reducer = (state,action)=>{
        if(action.type === "increment"){
            return state+1;
        }  
        else if(action.type === "decrement"){
            return state-1;
        }
        else if(action.type === "reset"){
            return state=0;
        }
        else{
            return state;
        }
    }

    const[state,dispatch]=useReducer(reducer,initialState);
    return(

        <>
           <h1>{state}</h1>
           <button onClick={()=>dispatch({type:"increment"})}>Count+</button>
           <button onClick={()=>dispatch({type:"decrement"})}>Count-</button>
           <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </>

    );
}

export default UseReducer;