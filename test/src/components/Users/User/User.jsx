import React, { useState } from "react"
import s from "./user.module.css";
import { NavLink } from "react-router-dom";
 const User = ({name, shortInfo,setInformUser,  disabledProcess, isDisabled, id,users  })=>{
 
    return(    
      
            <div className={s.user} >
                      <NavLink to ={"/"+id} activeClassName={s.active}>
            <button className={isDisabled?s.button:s.disabled} onClick={ setInformUser} disabled={isDisabled} >
            {!isDisabled? <span className={  s.open} onClick={disabledProcess(true,id)} ></span>:
            <span className={  s.close} onClick={disabledProcess(false,id)} ></span> }
    <h2>{name}</h2>
    <h3>{shortInfo}</h3>
    </button>
    </NavLink>
    </div>
  
  
        )
}
export default User