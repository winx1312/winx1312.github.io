import React, { useState } from "react"
import s from "./user.module.css";
import { NavLink } from "react-router-dom";
 const User = ({name, shortInfo,setInformUser,  disabledProcess, disabledInProgress, id,users  })=>{
 
    return(    
      
            <div className={s.user} >
                      <NavLink to ={"/"+id} activeClassName={s.active}>
            <button className={disabledProcess?s.button:s.disabled} onClick={ setInformUser} disabled={disabledInProgress.some(id => id === id)} >
            {!disabledProcess? <span className={  s.open}  ></span>:
            <span className={  s.close}  ></span> }
    <h2>{name}</h2>
    <h3>{shortInfo}</h3>
    </button>
    </NavLink>
    </div>
  
  
        )
}
export default User