import React from "react"
import {Redirect} from "react-router-dom"

const SecretPage = ({isLoggedIn}) =>{
  if(isLoggedIn){
    return (<div className = "jumbotron text-center"><h3>OOO, What are you doing man</h3> <img src="https://telegraf.com.ua/files/2016/10/Imperskie-shturmoviki-na-otdyhe-12.jpg" alt="starWars" /></div>)
  }

return <Redirect to="/login"/>
}
export default SecretPage