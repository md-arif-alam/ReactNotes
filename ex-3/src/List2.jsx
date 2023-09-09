import React,{useState,useEffect}from 'react'

const List2 =()=>{
   const initialList =[];

  //  const initialList = [{id:123,name:"user1", pwd:"@123"},{id:456,name:"user2", pwd:"@456"}];


   const[data,setData]=useState(initialList);
   useEffect(()=>{
    setData(
      [
        {id:123,name:"user1", pwd:"@123"},   // here we adding list to the state 
        {id:456,name:"user2", pwd:"@456"}
      ]
      )
    },[])
   const newArr = data.map(value=>{
    return <p key={value.id}>
      Id :{value.id} Name :{value.name} password :{value.pwd}
    </p>
   })


     return(
        <>
          {/* <h1>{data[0].id}</h1> */}
          {/* <h1>{data[0].pwd}</h1>
          <h1>{data[1].pwd}</h1> */}
          <h1>{newArr}</h1>
        </>
     );



}
export default List2;