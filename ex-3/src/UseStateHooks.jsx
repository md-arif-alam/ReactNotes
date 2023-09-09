import React,{useState} from 'react'

const UseStateHook = ()=>{
const[Id,setID]=useState();
const[pass,setPass]=useState();

const handleUser=(e)=>{
    setID(e.target.value);
}
const handlePass=(e)=>{
    setPass(e.target.value);
}
const  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(Id);
    console.log(pass);
    res.innerHTML=`Id is: ${Id} and Password is: ${pass}`;
}
const res = document.getElementById('print');
    return(
        <>
          <form onSubmit={handleSubmit}>
            <input type='text' onInput={handleUser} placeholder='User ID'></input>
            <input type='password' onInput={handlePass} placeholder='Enter Password'></input>
            <input type='submit' value='submit' ></input>
          </form>
          <p id='print'>Display Id and Password</p>
        </>
    )
}

export default UseStateHook;



