
import ChangeProfile from "./chnageProfile"
import { useContext } from "react"
import { AppContext } from "../App"
// import React from "react"
const Menu = () =>{
    const {userName , setUserName} = useContext(AppContext)
    return(
     <div> this is the menu page and, the user is {userName}
     <ChangeProfile setUserName = {setUserName}/>
     </div>
    )
}

export default Menu