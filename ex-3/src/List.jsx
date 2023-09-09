import React,{Component} from 'react'

const List = (props)=>{
    const arr =[4,6,8,9]
    // const newArr = arr.map((curVal)=>{
    //     return <li>{curVal*2}</li> // in react it return the array of object [{...},{...},{...},{...}]
    // })
    return (
        <>

        {/* <ul>               
            <li>{arr[0]*4}</li>
            <li>{arr[1]*4}</li>
            <li>{arr[2]*4}</li>
            <li>{arr[3]*4}</li>
        </ul> */}



          {/* <ul>{newArr}</ul> */}



          {/* <ul>
            {
                arr.map((curval)=>{return <li>{curval}</li>})
            }
          </ul> */}


          {/* getting array value from props */}

           <ul>
            {
                 props.newArr.map((curVal)=>{return <li>{curVal}</li>})
            }
           </ul>


          
        </>
    );
}
export default List;