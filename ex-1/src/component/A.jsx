import { Storage } from "../../apis/LaptopStore";

const A =()=>{
    <div>
        <Storage.Consumer>
            {
                (data)=>{
                    return <h1>{data.name}</h1>
                }
            }
        </Storage.Consumer>
    </div>
}
export default A;