import React from 'react';
import './External.css';
import styleModule from './External.module.css'

const External = ()=>{
    return(
        <>
          <h1 className='txt'>Hello World</h1>
          <h1 className={styleModule.txt}>this is the example of css module</h1>
        </>
    );
}

export default External;