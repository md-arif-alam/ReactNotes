// import React, { Component } from 'react'
// import ContextSimpleGuide from './ContextSimpleGuest'

// export default class ContextSimpleUser extends Component {
//   render() {
//     return (
//         <>
//             <h1>This is Context User</h1>
//             <ContextSimpleGuide/>
//         </>
//     )
//   }
// }


import React from 'react';
import ContextSimpleGuest from './ContextSimpleGuest';

export default function ContextSimpleUser(){
    return(
        <>
          <ContextSimpleGuest/>
        </>
    );
}