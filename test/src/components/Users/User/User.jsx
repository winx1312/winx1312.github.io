import React, { useState } from "react"
import s from "./user.module.css";
import { NavLink } from "react-router-dom";
 const User = ({name, shortInfo,setInformUser,  id,users  })=>{
 
    return(    
      
      
            <div className={s.user}  onClick={ setInformUser}>
                      <NavLink to ={"/"+id} activeClassName={s.active}>
             <span className={  s.close}  ></span>
           
    <h2>{name}</h2>
    <h3>{shortInfo}</h3>
    </NavLink>
    </div>
   
  
  
        )
}
export default User