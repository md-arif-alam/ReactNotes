import React from "react";
import ReactDOM from "react-dom";
// import el from './Components/App';
import App from './Components/App';

ReactDOM.render(<App age="20">I am Child {100+200}</App>,document.getElementById("root"));

// const root = ReactDOM.document.getElementById("root");

// root.render(){
//   return(
//     <>
//       <App age="20">I am Child {100+200}</App>
//     </>
//   );
//   }