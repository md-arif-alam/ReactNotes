import React, {Component} from "react";

export default class Form extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

        <div className='px-[100vw] h-[100vh] overflow-hidden flex justify-center items-center bg-slate-700'>
            <form className='bg-green-300 flex flex-col p-[1vw] gap-2 px-4 py-6' onSubmit={this.props.handleSubmit}>

                <input type="text" name="" id="" className="border-[1px] text-[1.3rem] border-[#00a113] p-2" placeholder="Username" onChange={this.props.handleUser}/>

                <input type="text" name="" id="" className="border-[1px] text-[1.3rem] border-[#00a113] p-2" placeholder="Password" onChange={this.props.handlePassword}/>

                <button className="py-2 bg-emerald-600 text-[white] font-bold text-[1.3rem] hover:bg-emerald-700 border-2 border-green-700 animate-bounce">Register</button>
                <button className="py-2 bg-slate-700 text-[white] font-bold text-[1.3rem] hover:bg-red-950  animate-bounce">DeRegister</button>
            </form>
        </div>
    );
  }
} 