
import { useContext } from "react"
import { AppContext } from "../App"
const Home = () =>{
    const {userName} = useContext(AppContext)
    return(
    <div>
   <h1>This the home page, and the user is : {userName}</h1>
    </div>
       
    )
}

export default Home