
import React from 'react';
import './index.css';
// import Header from "./Header";
// import ContactList from "./ContactList";
// import AddContact from "./AddContact";
import Css from "./CSS.css";
// import Message from "./Message";
import Counts from "./Counts";
// import ContactCard from "./ContactCard";
import Counter from "./Counter.jsx";
// import Form from './Form';
// import A from './component/A';
// import B from './component/B';
// import C from './component/C';
import LaptopStore from './apis/LaptopStore';




// const contactArrayNumber = [242536, 75566857, 857960];
// const contactArray = [
//   {
//     id: 123,
//     name: "arif",
//     email: "arif@gamil.com",
//   },
//   {
//     id: 456,
//     name: "alam",
//     email: "alam@gmail.com",
//   },
// ];

// const contObj = {
//   name: "arif",
//   email: "arif@gmail.com",
// };



// const App = () => {
//   return (
//     <>
//       {/* <Header contactNumber={contactArrayNumber} />
//       <ContactList contacts={contactArray} />
//       <AddContact cont={contObj} /> */}
//       {/* <AddContact cont = {contactArray}/> */}
//       {/* <Message />
//       <Counts/> */}
//       constru
//       <Counter />
      
//     </>
//   );
// };

// export default class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       count:0 , userLogin:false,
//     }

//   }

//   handleIncrement = ()=>{
//     this.setState((prevstate)=>{
//       return {count:prevstate.count+1}
//     })
//   }
//   handleDecreament = ()=>{
//     this.setState((prevstate)=>{
//       return{count:prevstate.count-1}
//     })
//   }
//   handleReset = ()=>{
//     this.setState((prevstate)=>{
//       return{count:0}
//     })
//   }

//   handleLogin =()=>{
//     this.setState({userLogin:!this.state.userLogin})
//   }

//   render(){
//        if(this.state.userLogin)
//          return <section>
//           <Counter handleIncrement={this.handleIncrement} handleDecreament={this.handleDecreament} handleReset={this.handleReset} count={this.state.count}></Counter> <br></br> <br></br>

//           <button onClick={this.handleLogin}>LogOut</button>
//          </section>

//          else
//          return <section>
//              <h1>Click On login button to log into counter app</h1>
//              <button onClick={this.handleLogin}>Login</button>
//          </section>
//   }

// }

  // render(){
  //    switch(this.state.userLogin){
  //        case true:
          // return <section>
          //    <Counter handleIncrement={this.handleIncrement} handleDecreament={this.handleDecreament} handleReset={this.handleReset} count={this.state.count}></Counter> <br></br> <br></br>

  //        <button onClick={this.handleLogin}>LogOut</button>
  //         </section>
  //         case false:
            // return <section>
            //     <h1>Click On login button to log into counter app</h1>
            //     <button onClick={this.handleLogin}>Login</button>
            // </section>
  //           default:
  //             break;
  //    }
  // }
  
      // render(){
      //   return(
      //       <>
      //        {this.state.userLogin ? <section>
      //         <Counter handleIncrement={this.handleIncrement} handleDecreament={this.handleDecreament} handleReset={this.handleReset} count={this.state.count}></Counter> <br></br> <br></br>
      //         <button onClick={this.handleLogin}>LogOut</button>
      //        </section>:<section>
      //           <h1>Click On login button to log into counter app</h1>
      //           <button onClick={this.handleLogin}>Login</button>
      //       </section>}
      //       </>
      //   );
      // }

      // render(){
      //   return(
      //     <>
      //     {this.state.userLogin &&  <section>
      //         <Counter handleIncrement={this.handleIncrement} handleDecreament={this.handleDecreament} handleReset={this.handleReset} count={this.state.count}></Counter> <br></br> <br></br>
      //         <button onClick={this.handleLogin}>LogOut</button>
      //        </section>            
      //     }
      //     <section>
      //       <h1>Click On login button to log into counter app</h1>
      //       <button onClick={this.handleLogin}>Login</button>
      //     </section>
          
      //     </>
      //   )
      // }
  


    // export default class App extends React.Component{
     
    //   constructor(props){
    //     super(props);
    //     this.state={
    //       username :"",
    //       password:"",
    //     }
    //   }

    //   handleUser=(e)=>{
    //     this.setState({username:e.target.value})
    //     console.log(e.target.value);
    //   }
    //   handlePassword=(e)=>{
    //     this.setState({password:e.target.value})
    //     console.log(e.target.value);
    //   }

    //   handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(this.state);
    //   }

    //   render(){
    //     return(
    //       <div>
    //         <Form handlePassword={this.handlePassword} handleSubmit={this.handleSubmit} handleUser={this.handleUser} state={this.state}/>

    //       </div>
    //     );
    //   }

    // }

  
//   import React, { useEffect,useState } from "react";
//   const App = ()=>{
//     const [hours,setHours] = useState(0);
//     const [mins,setMins] = useState(0);
//     const [second,setSecond] = useState(0);

    
//     useEffect(()=>{
//           setInterval(()=>{        
//           setSecond((second)=>second);
//           },1000)
//     },[]);

//     useEffect(()=>{
//       if(second==59){
//         setSecond(0);
//         setMins((mins)=>mins+1);
//       }
//     },[second]);

//      useEffect(()=>{
//       if(mins==59){
//         setMins(0);
//         setHours((hours)=>hours+1);
//       }
//      },[mins]);


//      return(
//       <section>
//         <article>
//           <div>{hours}</div>
//           <div>{mins}</div>
//           <div>{second}</div>
//         </article>
//       </section>
//      );


//   }
// export default App;


const App = ()=>{
    return(
      <section>
         <LaptopStore>
            {/* <A/>
            <B/> */}
         </LaptopStore>
         {/* <C/> */}
      </section>
    );
}
export default App;