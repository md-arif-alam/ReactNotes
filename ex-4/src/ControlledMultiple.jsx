import React,{useState} from 'react';

const ControlledMulti = ()=>{
    const[userValue,setUserValue]=useState();
    const handleChange=(e)=>{
        //  setValue(e.target.name);
        
        const inputData = e.target.name === 'password' ? e.target.value.toUpperCase().substr(0,5) : e.target.value;
        setUserValue(inputData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target[2]);

    }

    return(
        <>
         <form onSubmit={handleSubmit}>
            <br /><br />
            <h1>This is the example of multi controlled handle by React</h1>
            <input type="text" name='username' placeholder='Enter Name' onChange={handleChange}/><br /><br />
            <input type="text" name='password' placeholder='Enter Password' onChange={handleChange}/>
            <br /><br />
            <input type="submit" value="submit" name='submit'/>
         </form>
        </>
    );
}

export default ControlledMulti;