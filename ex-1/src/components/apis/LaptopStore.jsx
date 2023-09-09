import { createContext} from "react";
import A from '../component/A';
import B from '../component/B';
import C from '../component/C';

const Storage = createContext("No Laptop");

const LaptopStore = (props)=>{
    return(
        <Storage.Provider value={{name:"arif", age : 22}}>
            {/* {props.children} */}
            <A/>
            <B/>
            <C/>
        </Storage.Provider>
    );
}
export default LaptopStore;

export {Storage};