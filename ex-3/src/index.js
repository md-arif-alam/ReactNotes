import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));

//for hooks only

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// for conditional rendering

// root.render(
//   <>
    
//     {/* <App register={false}/> */}
//     <App isPrimeMember = {true}/>
  
//   </>
// );


// For List 

root.render(
  <>
    <App/>
  </>
);

